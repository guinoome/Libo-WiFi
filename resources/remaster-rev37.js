/* FDG Solar Rev 3.7.3 — Reference Alignment
   PRESENTATION-ONLY ENHANCER.
   Reads existing DOM values; never replaces authoritative engineering logic. */
(function(){
  'use strict';

  function byId(id){ return document.getElementById(id); }
  function txt(id,fallback){
    var el=byId(id);
    if(!el) return fallback || '—';
    var v=(el.textContent || '').replace(/\s+/g,' ').trim();
    return v || fallback || '—';
  }
  function val(id,fallback){
    var el=byId(id);
    if(!el) return fallback || '';
    return (el.value == null ? '' : String(el.value)).trim() || fallback || '';
  }
  function setText(id,value){
    var el=byId(id);
    if(el) el.textContent=value || '—';
  }
  function setHtml(id,value){
    var el=byId(id);
    if(el) el.innerHTML=value || '';
  }
  function numberFromText(s){
    var m=String(s||'').replace(/,/g,'').match(/-?\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : 0;
  }
  function calcRoot(){ return byId('view-calc'); }

  function getCoreSizer(){
    var root=calcRoot();
    if(!root) return null;
    for(var i=0;i<root.children.length;i++){
      var n=root.children[i];
      if(n.classList && n.classList.contains('card')) return n;
    }
    return null;
  }

  function focusCoreInputs(){
    var card=getCoreSizer();
    if(!card) return;
    card.scrollIntoView({behavior:'smooth',block:'start'});
    card.classList.remove('fdg-r37-focus-flash');
    void card.offsetWidth;
    card.classList.add('fdg-r37-focus-flash');
    window.setTimeout(function(){ card.classList.remove('fdg-r37-focus-flash'); },1500);
  }

  function openView(viewId){
    if(typeof window.switchView==='function') window.switchView(viewId,null);
  }

  function setupShell(){
    var sidebar=document.querySelector('.sidebar');
    if(!sidebar) return;

    // UI badge only; generated documents are deliberately untouched.
    var nodes=sidebar.querySelectorAll('.sidebar-logo > div');
    Array.prototype.forEach.call(nodes,function(node){
      if(/^REV\s+/i.test((node.textContent||'').trim())) node.textContent='REV 3.7.3';
    });

    if(document.querySelector('.fdg-r37-sidebar-handle')) return;

    var handle=document.createElement('button');
    handle.type='button';
    handle.className='fdg-r37-sidebar-handle';
    handle.setAttribute('aria-label','Open navigation');
    handle.setAttribute('aria-expanded','false');
    handle.innerHTML='<span>Navigation</span>';

    var backdrop=document.createElement('div');
    backdrop.className='fdg-r37-nav-backdrop';

    document.body.appendChild(handle);
    document.body.appendChild(backdrop);

    var timer=null;
    function openNav(lock){
      if(timer) window.clearTimeout(timer);
      sidebar.classList.add('fdg-r37-open');
      if(lock) document.body.classList.add('fdg-r37-nav-open');
      handle.setAttribute('aria-expanded','true');
    }
    function closeNav(){
      sidebar.classList.remove('fdg-r37-open');
      document.body.classList.remove('fdg-r37-nav-open');
      handle.setAttribute('aria-expanded','false');
    }
    function toggleNav(){
      if(document.body.classList.contains('fdg-r37-nav-open')) closeNav();
      else openNav(true);
    }

    handle.addEventListener('click',toggleNav);
    backdrop.addEventListener('click',closeNav);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeNav(); });

    handle.addEventListener('mouseenter',function(){
      if(window.matchMedia('(hover:hover)').matches) openNav(false);
    });
    handle.addEventListener('mouseleave',function(){
      if(window.matchMedia('(hover:hover)').matches && !document.body.classList.contains('fdg-r37-nav-open')){
        timer=window.setTimeout(function(){ sidebar.classList.remove('fdg-r37-open'); },260);
      }
    });
    sidebar.addEventListener('mouseenter',function(){
      if(window.matchMedia('(hover:hover)').matches) openNav(false);
    });
    sidebar.addEventListener('mouseleave',function(){
      if(window.matchMedia('(hover:hover)').matches && !document.body.classList.contains('fdg-r37-nav-open')){
        timer=window.setTimeout(function(){ sidebar.classList.remove('fdg-r37-open'); },220);
      }
    });
    sidebar.addEventListener('click',function(e){
      if(e.target.closest('.nav-item') && window.innerWidth<=980) window.setTimeout(closeNav,80);
    });
  }

  function buildHero(){
    var root=calcRoot();
    if(!root || root.querySelector('.fdg-r37-hero')) return;

    var hero=document.createElement('section');
    hero.className='fdg-r37-hero';
    hero.setAttribute('aria-label','FDG Solar engineering dashboard hero');
    hero.innerHTML=
      '<div class="fdg-r37-hero-inner">'+
        '<div class="fdg-r37-hero-copy">'+
          '<div class="fdg-r37-eyebrow">Engineering a brighter tomorrow</div>'+
          '<h1>Design the system.<br>Prove the energy.<em>Build with confidence.</em></h1>'+
          '<p>Accurate solar design, real-world inputs, battery autonomy, protection checks, economics, and synchronized client quotation — using the existing FDG engineering engine.</p>'+
          '<div class="fdg-r37-actions">'+
            '<button type="button" class="fdg-r37-action primary" data-r37-action="quote">Open Quotation&nbsp; →</button>'+
            '<button type="button" class="fdg-r37-action secondary" data-r37-action="sizing">▥&nbsp; Start System Sizing</button>'+
          '</div>'+
          '<div class="fdg-r37-trust-row">'+
            '<span><i>✓</i>Accurate Engineering<br>Real-world assumptions</span>'+
            '<span><i>▤</i>Client-Ready Outputs<br>Professional quotations</span>'+
            '<span><i>⚡</i>Built for the Philippines<br>Local data. Local expertise.</span>'+
          '</div>'+
        '</div>'+
        '<aside class="fdg-r37-live-card">'+
          '<div class="fdg-r37-live-head"><strong>Recommended Configuration</strong><span class="fdg-r37-live-state">Optimal</span></div>'+
          '<div class="fdg-r37-live-grid">'+
            '<div class="fdg-r37-live-metric" data-icon="▣"><div><label>Inverter</label><strong id="r37HeroInv">—</strong></div></div>'+
            '<div class="fdg-r37-live-metric" data-icon="▦"><div><label>PV Array</label><strong id="r37HeroPV">—</strong></div></div>'+
            '<div class="fdg-r37-live-metric battery" data-icon="▤"><div><label>Battery</label><strong id="r37HeroBat">—</strong></div></div>'+
            '<div class="fdg-r37-live-metric investment" data-icon="₱"><div><label>Investment</label><strong id="r37HeroCost">—</strong></div></div>'+
          '</div>'+
        '</aside>'+
      '</div>';

    var header=root.querySelector('.page-header');
    if(header) header.insertAdjacentElement('afterend',hero);
    else root.insertBefore(hero,root.firstChild);

    hero.addEventListener('click',function(e){
      var action=e.target.closest('[data-r37-action]');
      if(!action) return;
      var key=action.getAttribute('data-r37-action');
      if(key==='quote') openView('view-quote');
      if(key==='sizing') focusCoreInputs();
    });
  }

  function flowSvg(){
    return ''+
    '<svg class="fdg-r37-flow-svg" viewBox="0 0 760 215" role="img" aria-label="Solar energy flow visualization">'+
      '<defs>'+
        '<filter id="r37Glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'+
        '<marker id="r37ArrowGold" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#f4c34f"/></marker>'+
        '<marker id="r37ArrowCyan" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#23d7df"/></marker>'+
        '<marker id="r37ArrowViolet" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#c76bf0"/></marker>'+
        '<marker id="r37ArrowSlate" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#7fa4c7"/></marker>'+
      '</defs>'+
      '<g opacity=".7">'+
        '<line class="r37-grid-line" x1="0" y1="38" x2="760" y2="38"/><line class="r37-grid-line" x1="0" y1="106" x2="760" y2="106"/><line class="r37-grid-line" x1="0" y1="174" x2="760" y2="174"/>'+
      '</g>'+
      '<g transform="translate(48,58)">'+
        '<circle cx="20" cy="20" r="14" fill="#f4c34f"/>'+
        '<g stroke="#f4c34f" stroke-width="3" stroke-linecap="round"><line x1="20" y1="-2" x2="20" y2="-12"/><line x1="20" y1="42" x2="20" y2="52"/><line x1="-2" y1="20" x2="-12" y2="20"/><line x1="42" y1="20" x2="52" y2="20"/><line x1="4" y1="4" x2="-3" y2="-3"/><line x1="36" y1="36" x2="43" y2="43"/><line x1="36" y1="4" x2="43" y2="-3"/><line x1="4" y1="36" x2="-3" y2="43"/></g>'+
      '</g>'+
      '<text id="r37SvgSolar" class="r37-value" x="68" y="135" text-anchor="middle">—</text>'+
      '<text class="r37-label" x="68" y="150" text-anchor="middle">Daytime solar</text>'+
      '<path class="r37-path r37-solar-path" d="M112 78 H188" marker-end="url(#r37ArrowGold)"/>'+
      '<g transform="translate(199,55)">'+
        '<polygon points="0,55 54,47 66,90 12,98" fill="#0b4777" stroke="#4eb4ff" stroke-width="2"/>'+
        '<g stroke="#4eb4ff" stroke-width="1"><line x1="13" y1="56" x2="25" y2="95"/><line x1="28" y1="53" x2="40" y2="92"/><line x1="43" y1="51" x2="55" y2="90"/><line x1="5" y1="68" x2="59" y2="60"/><line x1="8" y1="80" x2="62" y2="72"/></g>'+
      '</g>'+
      '<text id="r37SvgPV" class="r37-value" x="232" y="175" text-anchor="middle">—</text>'+
      '<text class="r37-label" x="232" y="190" text-anchor="middle">PV array</text>'+
      '<path class="r37-path r37-direct-path" d="M270 104 H330" marker-end="url(#r37ArrowCyan)"/>'+
      '<g transform="translate(337,47)" stroke="#8ee9ff" stroke-width="3" fill="none" filter="url(#r37Glow)">'+
        '<path d="M0 58 L46 18 L92 58 V112 H0 Z"/><path d="M20 112 V76 H72 V112"/>'+
        '<rect x="34" y="63" width="24" height="22" fill="#f6c64d" stroke="#f6c64d"/>'+
      '</g>'+
      '<text id="r37SvgLoad" class="r37-value" x="383" y="175" text-anchor="middle">—</text>'+
      '<text class="r37-label" x="383" y="190" text-anchor="middle">To loads / daily equivalent</text>'+
      '<path class="r37-path r37-batt-path" d="M430 88 H508" marker-end="url(#r37ArrowViolet)"/>'+
      '<path class="r37-path r37-batt-path" d="M508 119 H430" marker-end="url(#r37ArrowViolet)"/>'+
      '<g transform="translate(521,63)">'+
        '<rect x="0" y="0" width="43" height="72" rx="8" fill="#0c3853" stroke="#67e4ff" stroke-width="2"/>'+
        '<rect x="13" y="-7" width="17" height="8" rx="3" fill="#67e4ff"/>'+
        '<rect x="7" y="9" width="29" height="54" rx="4" fill="#2ad88d"/>'+
        '<path d="M21 20 l-7 15 h7 l-4 12 12-17 h-7 l5-10z" fill="#f8fafc"/>'+
      '</g>'+
      '<text id="r37SvgBattery" class="r37-value" x="542" y="158" text-anchor="middle">—</text>'+
      '<text class="r37-label" x="542" y="173" text-anchor="middle">Battery bank</text>'+
      '<path class="r37-path r37-grid-path" d="M570 104 H635" marker-end="url(#r37ArrowSlate)"/>'+
      '<g transform="translate(647,50)" stroke="#d3e0ec" stroke-width="2" fill="none">'+
        '<line x1="24" y1="0" x2="4" y2="100"/><line x1="24" y1="0" x2="44" y2="100"/><line x1="9" y1="72" x2="39" y2="72"/><line x1="13" y1="50" x2="35" y2="50"/><line x1="17" y1="28" x2="31" y2="28"/><line x1="4" y1="100" x2="44" y2="100"/><line x1="17" y1="28" x2="9" y2="50"/><line x1="31" y1="28" x2="39" y2="50"/>'+
      '</g>'+
      '<text id="r37SvgGrid" class="r37-value" x="671" y="170" text-anchor="middle">—</text>'+
      '<text class="r37-label" x="671" y="185" text-anchor="middle">Grid / system mode</text>'+
    '</svg>';
  }

  function buildDashboard(){
    var root=calcRoot();
    if(!root || root.querySelector('.fdg-r37-dashboard')) return;

    var dash=document.createElement('section');
    dash.className='fdg-r37-dashboard';
    dash.setAttribute('aria-label','Live solar engineering overview');
    dash.innerHTML=
      '<div class="fdg-r37-panel inputs-panel">'+
        '<div class="fdg-r37-panel-head"><div><div class="fdg-r37-panel-title"><i>⚙</i>System Input</div><div class="fdg-r37-panel-sub">Current project parameters from the original engine</div></div><span class="fdg-r37-source">Live mirror</span></div>'+
        '<div class="fdg-r37-inputs">'+
          '<div class="fdg-r37-input-grid">'+
            '<div class="fdg-r37-input-item wide"><label>Load Profile</label><strong id="r37InputProfile">—</strong></div>'+
            '<div class="fdg-r37-input-item"><label>Energy Basis</label><strong id="r37InputEnergy">—</strong></div>'+
            '<div class="fdg-r37-input-item"><label>Daily Equivalent</label><strong id="r37InputDaily">—</strong></div>'+
            '<div class="fdg-r37-input-item"><label>Electrical</label><strong id="r37InputPhase">—</strong></div>'+
            '<div class="fdg-r37-input-item"><label>Architecture</label><strong id="r37InputArch">—</strong></div>'+
          '</div>'+
          '<button type="button" class="fdg-r37-open-inputs" data-r37-open-core>Open Detailed Inputs&nbsp; →</button>'+
        '</div>'+
      '</div>'+
      '<div class="fdg-r37-panel flow-panel">'+
        '<div class="fdg-r37-panel-head"><div><div class="fdg-r37-panel-title"><i>⌘</i>Energy Flow (Typical Day)</div><div class="fdg-r37-panel-sub">Calculated system state + normalized load-profile visualization</div></div><span class="fdg-r37-source">Engine values</span></div>'+
        '<div class="fdg-r37-flow-wrap">'+flowSvg()+'</div>'+
        '<div class="fdg-r37-flow-legend">'+
          '<span><i class="fdg-r37-dot" style="background:#f4c34f"></i>Solar</span>'+
          '<span><i class="fdg-r37-dot" style="background:#23d7df"></i>Direct use</span>'+
          '<span><i class="fdg-r37-dot" style="background:#c76bf0"></i>Battery charge / discharge</span>'+
          '<span><i class="fdg-r37-dot" style="background:#7fa4c7"></i>Grid interaction</span>'+
        '</div>'+
        '<div class="fdg-r37-chart-box">'+
          '<div class="fdg-r37-chart-head"><strong>Typical Day Profile</strong><span>Normalized visualization from selected day/night profile — not a second calculation engine</span></div>'+
          '<div class="fdg-r37-bars" id="r37Bars"></div>'+
          '<div class="fdg-r37-time-axis"><span>12AM</span><span>6AM</span><span>12PM</span><span>6PM</span><span>12AM</span></div>'+
        '</div>'+
      '</div>'+
      '<div class="fdg-r37-panel outputs-panel">'+
        '<div class="fdg-r37-panel-head"><div><div class="fdg-r37-panel-title"><i>▥</i>System Outputs</div><div class="fdg-r37-panel-sub">Key results from the authoritative calculator</div></div></div>'+
        '<div class="fdg-r37-outputs">'+
          '<div class="fdg-r37-output-row gold"><i>☀</i><div><small>PV Array Size</small></div><strong id="r37OutPV">—</strong></div>'+
          '<div class="fdg-r37-output-row"><i>▣</i><div><small>Inverter Size</small></div><strong id="r37OutInv">—</strong></div>'+
          '<div class="fdg-r37-output-row green"><i>▤</i><div><small>Battery Capacity</small></div><strong id="r37OutBat">—</strong></div>'+
          '<div class="fdg-r37-output-row gold"><i>⌁</i><div><small>Daily Equivalent</small></div><strong id="r37OutDaily">—</strong></div>'+
          '<div class="fdg-r37-output-row green"><i>↗</i><div><small>Monthly Solar Offset</small></div><strong id="r37OutSavings">—</strong></div>'+
          '<div class="fdg-r37-output-row gold"><i>₱</i><div><small>Estimated Investment</small></div><strong id="r37OutCost">—</strong></div>'+
        '</div>'+
      '</div>';

    var hero=root.querySelector('.fdg-r37-hero');
    if(hero) hero.insertAdjacentElement('afterend',dash);
    else root.insertBefore(dash,root.firstChild);

    dash.addEventListener('click',function(e){
      if(e.target.closest('[data-r37-open-core]')) focusCoreInputs();
    });
  }

  function buildBottomCards(){
    var root=calcRoot();
    if(!root || root.querySelector('.fdg-r37-bottom')) return;
    var bottom=document.createElement('section');
    bottom.className='fdg-r37-bottom';
    bottom.innerHTML=
      '<div class="fdg-r37-bottom-card">'+
        '<h4>◉ Financial Snapshot</h4>'+
        '<div class="fdg-r37-bottom-value" id="r37FinCost">—</div>'+
        '<div class="fdg-r37-bottom-sub">Current estimated system investment</div>'+
        '<div class="fdg-r37-mini-row"><div class="fdg-r37-mini"><small>Monthly offset</small><strong id="r37FinSavings">—</strong></div><div class="fdg-r37-mini"><small>System</small><strong id="r37FinInv">—</strong></div></div>'+
      '</div>'+
      '<div class="fdg-r37-bottom-card">'+
        '<h4>◒ Load Balance</h4>'+
        '<div class="fdg-r37-balance">'+
          '<div class="fdg-r37-donut" id="r37Donut"><span id="r37DonutText">—</span></div>'+
          '<div><div class="fdg-r37-bottom-value" id="r37BalanceDaily" style="font-size:15px;margin-top:0">—</div><div class="fdg-r37-bottom-sub">Selected day / night split</div><div class="fdg-r37-mini-row"><div class="fdg-r37-mini"><small>Day</small><strong id="r37DayPct">—</strong></div><div class="fdg-r37-mini"><small>Night</small><strong id="r37NightPct">—</strong></div></div></div>'+
        '</div>'+
      '</div>'+
      '<div class="fdg-r37-bottom-card">'+
        '<h4>✓ Project Readiness</h4>'+
        '<div class="fdg-r37-bottom-value" id="r37ReadyState" style="color:#53e19d">Checking…</div>'+
        '<div class="fdg-r37-bottom-sub">Presentation status based on existing output availability</div>'+
        '<div class="fdg-r37-checks">'+
          '<div class="fdg-r37-check" id="r37CheckEngine"><i>✓</i><span>Engineering outputs available</span></div>'+
          '<div class="fdg-r37-check" id="r37CheckSync"><i>✓</i><span>Quotation synchronization status</span></div>'+
          '<div class="fdg-r37-check" id="r37CheckProfile"><i>✓</i><span>Load profile selected</span></div>'+
        '</div>'+
      '</div>';

    var dash=root.querySelector('.fdg-r37-dashboard');
    if(dash) dash.insertAdjacentElement('afterend',bottom);
    else root.insertBefore(bottom,root.firstChild);
  }

  function addCoreLabel(){
    var root=calcRoot();
    var card=getCoreSizer();
    if(!root || !card || root.querySelector('.fdg-r37-core-label')) return;
    var label=document.createElement('div');
    label.className='fdg-r37-core-label';
    label.innerHTML='<strong>Detailed Engineering Controls</strong><span>Original calculation engine · formulas and workflows unchanged</span>';
    card.insertAdjacentElement('beforebegin',label);
  }

  function profileRatios(){
    var el=byId('flowProfile');
    var raw=el ? String(el.value||'0.25,0.75') : '0.25,0.75';
    var p=raw.split(',');
    var d=parseFloat(p[0]); var n=parseFloat(p[1]);
    if(!isFinite(d)) d=.25;
    if(!isFinite(n)) n=.75;
    return {day:d,night:n};
  }

  function renderBars(){
    var holder=byId('r37Bars');
    if(!holder) return;
    var ratios=profileRatios();
    var html='';
    var values=[];
    var max=0;

    for(var h=0;h<24;h++){
      var daylight=(h>=6 && h<18);
      var angle=Math.PI*((h-6)+.5)/12;
      var sun=daylight ? Math.max(0,Math.sin(angle)) : 0;
      var load=daylight ? ratios.day/12 : ratios.night/12;
      var loadScaled=load*9;
      var solarScaled=sun*.48;
      var direct=Math.min(loadScaled,solarScaled);
      var solarExtra=Math.max(0,solarScaled-direct);
      var night=Math.max(0,loadScaled-direct);
      var total=direct+solarExtra+night;
      if(total>max) max=total;
      values.push({direct:direct,solar:solarExtra,night:night,total:total});
    }
    max=max||1;

    values.forEach(function(v){
      var scale=80/max;
      var d=Math.max(1,Math.round(v.direct*scale));
      var s=Math.max(0,Math.round(v.solar*scale));
      var n=Math.max(1,Math.round(v.night*scale));
      html+='<div class="fdg-r37-bar">'+
        '<div class="fdg-r37-seg direct" style="height:'+d+'px"></div>'+
        (s?'<div class="fdg-r37-seg solar" style="height:'+s+'px"></div>':'')+
        '<div class="fdg-r37-seg '+(v.night>.045?'night':'grid')+'" style="height:'+n+'px"></div>'+
      '</div>';
    });
    holder.innerHTML=html;
  }

  function phaseLabel(){
    var raw=val('auto-phase','');
    if(!raw) return '—';
    var p=raw.split('|');
    var phase=p[0]==='1'?'1-Phase':(p[0]==='3'?'3-Phase':p[0]);
    return phase+(p[1]?' · '+p[1]+'V':'');
  }
  function architectureLabel(){
    var raw=val('auto-sys-type','');
    if(raw==='hybrid') return 'Hybrid / On-Off Grid';
    if(raw==='offgrid') return 'Off-Grid';
    if(raw==='gridtie') return 'Grid-Tied';
    return raw || txt('out-arch','—');
  }
  function inputEnergyLabel(){
    var basis=val('auto-basis','bill');
    if(basis==='bill'){
      var bill=val('flowBill','');
      var rate=val('flowRate','');
      return (bill?'₱'+Number(bill).toLocaleString():'Bill')+(rate?' @ ₱'+rate+'/kWh':'');
    }
    if(basis==='kwh') return (val('flowConsumption','—'))+' kWh/mo';
    if(basis==='amps') return (val('flowAmps','—'))+' A · '+(val('flowAmpsHours','—'))+' h';
    return basis;
  }

  function updateUI(){
    var profile=byId('flowProfile');
    var profileText=profile && profile.options && profile.selectedIndex>=0 ? profile.options[profile.selectedIndex].text : '—';

    var pv=txt('out-pkwp','');
    var panels=txt('out-panels','');
    var pvDisplay=pv || panels || '—';
    if(pv && panels) pvDisplay=pv+' · '+panels;

    var bat=txt('out-battery','');
    var batDetail=txt('out-batah','');
    var batDisplay=bat || batDetail || '—';

    setText('r37HeroInv',txt('out-inverter'));
    setText('r37HeroPV',pvDisplay);
    setText('r37HeroBat',batDisplay);
    setText('r37HeroCost',txt('out-investment'));

    setText('r37InputProfile',profileText);
    setText('r37InputEnergy',inputEnergyLabel());
    setText('r37InputDaily',txt('mathDailyKwh'));
    setText('r37InputPhase',phaseLabel());
    setText('r37InputArch',architectureLabel());

    setText('r37SvgSolar',txt('flowValDay'));
    setText('r37SvgPV',pv || panels || '—');
    setText('r37SvgLoad',txt('mathDailyKwh'));
    setText('r37SvgBattery',txt('flowValBattery'));
    setText('r37SvgGrid',architectureLabel());

    setText('r37OutPV',pv || panels || '—');
    setText('r37OutInv',txt('out-inverter'));
    setText('r37OutBat',batDisplay);
    setText('r37OutDaily',txt('mathDailyKwh'));
    setText('r37OutSavings',txt('flowValSavings'));
    setText('r37OutCost',txt('out-investment'));

    setText('r37FinCost',txt('out-investment'));
    setText('r37FinSavings',txt('flowValSavings'));
    setText('r37FinInv',txt('out-inverter'));

    var ratios=profileRatios();
    var dayPct=Math.round(ratios.day*100);
    var nightPct=Math.round(ratios.night*100);
    setText('r37DayPct',dayPct+'%');
    setText('r37NightPct',nightPct+'%');
    setText('r37DonutText',dayPct+' / '+nightPct);
    setText('r37BalanceDaily',profileText);
    var donut=byId('r37Donut');
    if(donut) donut.style.setProperty('--r37-day-deg',(ratios.day*360)+'deg');

    var hasEngine=txt('out-inverter','—')!=='—' && txt('out-pkwp','—')!=='—';
    var sync=txt('syncStatusText','');
    var hasSync=/Quotation synced/i.test(sync);
    var hasProfile=!!val('flowProfile','');

    function mark(id,ok){
      var el=byId(id);
      if(!el) return;
      el.classList.toggle('pending',!ok);
      var icon=el.querySelector('i');
      if(icon) icon.textContent=ok?'✓':'!';
    }
    mark('r37CheckEngine',hasEngine);
    mark('r37CheckSync',hasSync);
    mark('r37CheckProfile',hasProfile);

    var ready=hasEngine && hasProfile;
    setText('r37ReadyState',ready?(hasSync?'Ready to Quote':'Engineering Ready'):'Inputs Required');
    var readyEl=byId('r37ReadyState');
    if(readyEl) readyEl.style.color=ready?'#53e19d':'#f6c451';

    renderBars();
  }

  function observe(){
    [
      'out-inverter','out-arch','out-panels','out-pkwp','out-battery','out-batah','out-investment',
      'flowValDay','mathDailyKwh','flowValBattery','flowValSavings','syncStatusText'
    ].forEach(function(id){
      var el=byId(id);
      if(!el) return;
      new MutationObserver(function(){ window.requestAnimationFrame(updateUI); })
        .observe(el,{subtree:true,childList:true,characterData:true,attributes:true});
    });
    document.addEventListener('input',function(){ window.requestAnimationFrame(updateUI); },true);
    document.addEventListener('change',function(){ window.requestAnimationFrame(updateUI); },true);
  }

  function init(){
    setupShell();
    buildHero();
    buildDashboard();
    buildBottomCards();
    addCoreLabel();
    updateUI();
    observe();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();