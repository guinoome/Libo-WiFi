/* FDG Solar Rev 3.7 — SAFE PREVIEW
   Read-only presentation enhancer.
   This file does not calculate or overwrite engineering results. */
(function(){
  'use strict';

  function byId(id){ return document.getElementById(id); }
  function textOf(id, fallback){
    var el = byId(id);
    if(!el) return fallback || '—';
    var txt = (el.textContent || '').replace(/\s+/g,' ').trim();
    return txt || fallback || '—';
  }
  function setText(id, value){
    var el = byId(id);
    if(el) el.textContent = value || '—';
  }
  function openView(viewId){
    if(typeof window.switchView === 'function'){
      window.switchView(viewId, null);
    }
  }

  function buildHero(){
    var calc = byId('view-calc');
    if(!calc || calc.querySelector('.fdg-r37-hero')) return;

    var hero = document.createElement('section');
    hero.className = 'fdg-r37-hero';
    hero.setAttribute('aria-label','FDG Solar premium calculator overview');

    hero.innerHTML =
      '<div class="fdg-r37-hero-inner">' +
        '<div class="fdg-r37-hero-copy">' +
          '<div class="fdg-r37-eyebrow">Engineering workspace · live calculator state</div>' +
          '<h1>Design the system. <em>Prove the energy.</em> Build with confidence.</h1>' +
          '<p>Premium solar engineering workspace for load interpretation, system sizing, battery autonomy, economics, and synchronized client quotation — while the existing calculation engine remains the single source of truth.</p>' +
          '<div class="fdg-r37-actions">' +
            '<button type="button" class="fdg-r37-action primary" data-r37-view="view-quote">Open Quotation</button>' +
            '<button type="button" class="fdg-r37-action secondary" data-r37-scroll="flowConsumption">Start System Sizing</button>' +
          '</div>' +
        '</div>' +
        '<aside class="fdg-r37-live-card">' +
          '<div class="fdg-r37-live-head"><strong>Recommended Configuration</strong><span class="fdg-r37-live-state">Live mirror</span></div>' +
          '<div class="fdg-r37-live-grid">' +
            '<div class="fdg-r37-live-metric"><label>Inverter</label><strong id="r37HeroInv">—</strong></div>' +
            '<div class="fdg-r37-live-metric"><label>PV Array</label><strong id="r37HeroPV">—</strong></div>' +
            '<div class="fdg-r37-live-metric"><label>Battery</label><strong id="r37HeroBat">—</strong></div>' +
            '<div class="fdg-r37-live-metric investment"><label>Investment</label><strong id="r37HeroCost">—</strong></div>' +
          '</div>' +
        '</aside>' +
      '</div>';

    var header = calc.querySelector('.page-header');
    if(header) header.insertAdjacentElement('afterend', hero);
    else calc.insertBefore(hero, calc.firstChild);

    hero.addEventListener('click', function(e){
      var view = e.target.closest('[data-r37-view]');
      if(view){ openView(view.getAttribute('data-r37-view')); return; }
      var scroll = e.target.closest('[data-r37-scroll]');
      if(scroll){
        var target = byId(scroll.getAttribute('data-r37-scroll'));
        if(target) target.scrollIntoView({behavior:'smooth',block:'center'});
      }
    });
  }

  function buildWorkspace(){
    var calc = byId('view-calc');
    if(!calc || calc.querySelector('.fdg-r37-workspace')) return;

    var section = document.createElement('section');
    section.className = 'fdg-r37-workspace';
    section.setAttribute('aria-label','Read-only engineering visualization');

    section.innerHTML =
      '<div class="fdg-r37-panel">' +
        '<div class="fdg-r37-panel-head">' +
          '<div><div class="fdg-r37-panel-kicker">Read-only visual mirror</div><div class="fdg-r37-panel-title">Energy Flow · Current Calculated State</div></div>' +
          '<div class="fdg-r37-source">Existing engine</div>' +
        '</div>' +
        '<div class="fdg-r37-flow">' +
          '<div class="fdg-r37-node solar"><div class="icon">☀</div><strong id="r37FlowDay">—</strong><span>Daytime solar / offset</span></div>' +
          '<div class="fdg-r37-arrow"></div>' +
          '<div class="fdg-r37-node load"><div class="icon">⌂</div><strong id="r37FlowLoad">—</strong><span>Daily equivalent load</span></div>' +
          '<div class="fdg-r37-arrow"></div>' +
          '<div class="fdg-r37-node battery"><div class="icon">▣</div><strong id="r37FlowBat">—</strong><span>Battery requirement / bank</span></div>' +
          '<div class="fdg-r37-arrow"></div>' +
          '<div class="fdg-r37-node grid"><div class="icon">⌁</div><strong id="r37FlowGrid">Existing logic</strong><span>Grid / offset interaction</span></div>' +
        '</div>' +
        '<div class="fdg-r37-flow-foot">' +
          '<span><i class="fdg-r37-dot" style="background:#fbbf24"></i>Solar result</span>' +
          '<span><i class="fdg-r37-dot" style="background:#22d3ee"></i>Direct load path</span>' +
          '<span><i class="fdg-r37-dot" style="background:#10b981"></i>Battery path</span>' +
          '<span><i class="fdg-r37-dot" style="background:#a78bfa"></i>Charge / discharge context</span>' +
          '<span><i class="fdg-r37-dot" style="background:#94a3b8"></i>Grid state</span>' +
        '</div>' +
      '</div>' +
      '<aside class="fdg-r37-panel">' +
        '<div class="fdg-r37-panel-head">' +
          '<div><div class="fdg-r37-panel-kicker">Live outputs</div><div class="fdg-r37-panel-title">Engineering Snapshot</div></div>' +
        '</div>' +
        '<div class="fdg-r37-summary">' +
          '<div class="fdg-r37-summary-item"><label>PV Array</label><strong id="r37SnapPV">—</strong></div>' +
          '<div class="fdg-r37-summary-item"><label>Inverter</label><strong id="r37SnapInv">—</strong></div>' +
          '<div class="fdg-r37-summary-item"><label>Monthly Savings</label><strong id="r37SnapSavings">—</strong></div>' +
          '<div class="fdg-r37-summary-item"><label>Investment</label><strong id="r37SnapCost">—</strong></div>' +
        '</div>' +
        '<div class="fdg-r37-note">Presentation only. Every value above is mirrored from the existing calculator DOM. Rev 3.7 does not replace or recompute the authoritative engineering logic.</div>' +
      '</aside>';

    var hero = calc.querySelector('.fdg-r37-hero');
    if(hero) hero.insertAdjacentElement('afterend', section);
    else calc.insertBefore(section, calc.firstChild);
  }

  function updatePresentation(){
    var pvPanels = textOf('out-panels','');
    var pvKwp = textOf('out-pkwp','');
    var pvDisplay = pvKwp || pvPanels || '—';
    if(pvPanels && pvKwp) pvDisplay = pvKwp + ' · ' + pvPanels;

    var batMain = textOf('out-battery','');
    var batDetail = textOf('out-batah','');
    var batDisplay = batMain || batDetail || '—';

    setText('r37HeroInv', textOf('out-inverter'));
    setText('r37HeroPV', pvDisplay);
    setText('r37HeroBat', batDisplay);
    setText('r37HeroCost', textOf('out-investment'));

    setText('r37FlowDay', textOf('flowValDay'));
    setText('r37FlowLoad', textOf('mathDailyKwh'));
    setText('r37FlowBat', textOf('flowValBattery'));
    setText('r37FlowGrid', textOf('flowValSavings','Existing logic'));

    setText('r37SnapPV', pvDisplay);
    setText('r37SnapInv', textOf('out-inverter'));
    setText('r37SnapSavings', textOf('flowValSavings'));
    setText('r37SnapCost', textOf('out-investment'));
  }

  function observeAuthoritativeOutputs(){
    [
      'out-inverter','out-panels','out-pkwp','out-battery','out-batah','out-investment',
      'flowValDay','mathDailyKwh','flowValBattery','flowValSavings','flowSummaryText'
    ].forEach(function(id){
      var el = byId(id);
      if(!el) return;
      new MutationObserver(function(){ requestAnimationFrame(updatePresentation); })
        .observe(el,{subtree:true,childList:true,characterData:true,attributes:true});
    });

    document.addEventListener('input',function(){ requestAnimationFrame(updatePresentation); },true);
    document.addEventListener('change',function(){ requestAnimationFrame(updatePresentation); },true);
  }


  function setupRev37Shell(){
    var sidebar = document.querySelector('.sidebar');
    if(!sidebar) return;

    // Visible application revision only. Generated documents remain untouched.
    var revNodes = sidebar.querySelectorAll('.sidebar-logo > div');
    Array.prototype.forEach.call(revNodes,function(node){
      var txt=(node.textContent||'').trim();
      if(/^REV\s+/i.test(txt)) node.textContent='REV 3.7';
    });

    if(!document.querySelector('.fdg-r37-sidebar-handle')){
      var handle=document.createElement('button');
      handle.type='button';
      handle.className='fdg-r37-sidebar-handle';
      handle.setAttribute('aria-label','Open navigation');
      handle.setAttribute('aria-expanded','false');
      handle.innerHTML='<span>Navigation</span>';
      document.body.appendChild(handle);

      var backdrop=document.createElement('div');
      backdrop.className='fdg-r37-nav-backdrop';
      document.body.appendChild(backdrop);

      function closeNav(){
        sidebar.classList.remove('fdg-r37-open');
        document.body.classList.remove('fdg-r37-nav-open');
        handle.setAttribute('aria-expanded','false');
      }
      function openNav(){
        sidebar.classList.add('fdg-r37-open');
        document.body.classList.add('fdg-r37-nav-open');
        handle.setAttribute('aria-expanded','true');
      }
      function toggleNav(){
        if(document.body.classList.contains('fdg-r37-nav-open')) closeNav();
        else openNav();
      }

      handle.addEventListener('click',toggleNav);
      backdrop.addEventListener('click',closeNav);
      document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeNav(); });

      // Desktop: reveal on pointer approach, hide after leaving.
      var hideTimer=null;
      sidebar.addEventListener('mouseenter',function(){
        if(hideTimer) clearTimeout(hideTimer);
        sidebar.classList.add('fdg-r37-open');
      });
      sidebar.addEventListener('mouseleave',function(){
        if(document.body.classList.contains('fdg-r37-nav-open')) return;
        hideTimer=setTimeout(function(){ sidebar.classList.remove('fdg-r37-open'); },220);
      });
      handle.addEventListener('mouseenter',function(){
        if(window.matchMedia('(hover:hover)').matches){
          if(hideTimer) clearTimeout(hideTimer);
          sidebar.classList.add('fdg-r37-open');
        }
      });
      handle.addEventListener('mouseleave',function(){
        if(window.matchMedia('(hover:hover)').matches && !document.body.classList.contains('fdg-r37-nav-open')){
          hideTimer=setTimeout(function(){ sidebar.classList.remove('fdg-r37-open'); },300);
        }
      });

      // Any navigation click closes the overlay after the existing handler runs.
      sidebar.addEventListener('click',function(e){
        if(e.target.closest('.nav-item') && window.innerWidth<=980){
          setTimeout(closeNav,80);
        }
      });
    }
  }

  function init(){
    setupRev37Shell();
    buildHero();
    buildWorkspace();
    updatePresentation();
    observeAuthoritativeOutputs();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  } else {
    init();
  }
})();