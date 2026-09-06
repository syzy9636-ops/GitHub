import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Mail, Menu, Plus, Sparkles, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const assetBase = import.meta.env.BASE_URL

const projects = [
  {
    number: '01',
    title: '「源·世界」',
    subtitle: '5.2 版本 PV',
    category: '深空之眼',
    year: '2025',
    bvid: 'BV1qhK36VEjT',
    url: 'https://www.bilibili.com/video/BV1qhK36VEjT/',
    image: 'https://i2.hdslb.com/bfs/archive/04956196fb8b4dc33c5f30f954fcd69dcd460afa.jpg@800w_420h',
    tone: 'gold',
  },
  {
    number: '02',
    title: '「入无间」',
    subtitle: '5.1 版本 PV',
    category: '深空之眼',
    year: '2025',
    bvid: 'BV1AALb6ZESw',
    url: 'https://www.bilibili.com/video/BV1AALb6ZESw/',
    image: 'https://i2.hdslb.com/bfs/archive/408377b564c9264bb7cdd92de9919c74469fe2db.jpg@800w_420h',
    tone: 'teal',
  },
  {
    number: '03',
    title: '「览宙合」',
    subtitle: '5.0 版本 PV',
    category: '深空之眼',
    year: '2025',
    bvid: 'BV1aQAcz7E6v',
    url: 'https://www.bilibili.com/video/BV1aQAcz7E6v/',
    image: 'https://i0.hdslb.com/bfs/archive/c2c6c12e08bdb464e0764f18e8e3a6fc94150a1c.jpg@800w_420h',
    tone: 'ink',
  },
]

const bilibiliProfileUrl = 'https://space.bilibili.com/291118988?spm_id_from=333.788.0.0'
const bilibiliAvatarUrl = 'https://i2.hdslb.com/bfs/face/d532b37dc481addd2a133f482cf67f5d418963a8.jpg'
const heroVideoBvids = ['BV1qhK36VEjT', 'BV1AALb6ZESw', 'BV1aQAcz7E6v']
const archiveWallCovers = [
  'https://i1.hdslb.com/bfs/archive/f74df942aa4304ce4acc4e836d16b03102594e27.jpg@600w_315h',
  projects[0].image.replace('@800w_420h', '@600w_315h'),
  projects[1].image.replace('@800w_420h', '@600w_315h'),
  'https://i2.hdslb.com/bfs/archive/4808dd772047df290edc68e9b3c63038d91437e2.jpg@600w_315h',
  'https://i1.hdslb.com/bfs/archive/0879dab05da5a48221ec11043f9b2ba592e0b581.jpg@600w_315h',
  'https://i1.hdslb.com/bfs/archive/217e209c0744ec87b92dc926e78e67b50ddc87ec.jpg@600w_315h',
  projects[2].image.replace('@800w_420h', '@600w_315h'),
]

const videoArchive = [
  ['01', '《深空之眼》诗蔻蒂角色印象曲「Redemption」', '角色印象曲 MV', 'https://www.bilibili.com/video/BV1x5osYfE52/'],
  ['02', '《深空之眼》角色 / 项目 PV 作品集', 'PV 作品集', 'https://www.bilibili.com/video/BV191G1zaEtu/'],
  ['03', '《深空之眼×噬神者》4.2 联动版本 PV「神谕绝响」', '联动版本 PV', 'https://www.bilibili.com/video/BV1TL7HzeEME/'],
  ['04', '《深空之眼》4.3 版本 PV「异世界招聘指南」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1cFKZzcEow/'],
  ['05', '《深空之眼》4.4 版本 PV「枪火剧场」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1u5tyzfEbz/'],
  ['06', '《深空之眼》4.5 版本 PV「劫乘大千」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1fmp7zXEp7/'],
  ['07', '《深空之眼》4.5 版本剧情 2D 动画「生命与死亡」', '剧情 2D 动画', 'https://www.bilibili.com/video/BV1MAnizSExL/'],
  ['08', '《深空之眼》4.6 版本 PV「明日殇歌」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1QE2FBAEMZ/'],
  ['09', '《深空之眼》4.7 版本 PV「旧时残响」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1cpqRB2Ej4/'],
  ['10', '《深空之眼》4.8 版本 PV「知北游」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1u96eB1Eme/'],
  ['11', '《深空之眼》5.0 版本 PV「览宙合」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1aQAcz7E6v/'],
  ['12', '《深空之眼》5.1 版本 PV「入无间」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1AALb6ZESw/'],
  ['13', '《深空之眼》5.2 版本 PV「源·世界」', '版本宣传 PV', 'https://www.bilibili.com/video/BV1qhK36VEjT/'],
]

const strengths = [
  ['01', 'Unity 视觉开发', '从 3D 场景架构、动态灯光渲染，到实时特效与后期处理，完成引擎端视觉落地。'],
  ['02', 'PV / MV 宣发制作', '参与高规格 PV、MV 等宣发项目制作，负责视觉表现力的落地、打磨与最终合成。'],
  ['03', '多软件协同制作', '熟悉 Unity、After Effects、Blender、Photoshop，在 3D、实时与后期之间顺畅切换。'],
  ['04', '统筹与新人培训', '对齐导演与营销预期，排期分工、跟进反馈，并整理 Unity 入门教程与制作流程。'],
]

function SectionLabel({ number, children, note, english }) {
  return (
    <div className="section-label">
      <span className="section-label-en" data-motion-title aria-hidden="true">{english}</span>
      <span className="shiny-hover">{number}</span>
      <strong>{children}</strong>
      <i />
      <small className="shiny-hover">{note}</small>
    </div>
  )
}

function BorderGlow({ children, className = '' }) {
  return <div className={`border-glow ${className}`}>{children}</div>
}

const menuItems = [
  ['首页', 'HOME', 'top'],
  ['个人档案', 'ABOUT', 'about'],
  ['作品选集', 'SELECTED WORKS', 'projects'],
  ['作品归档', 'ARCHIVE', 'archive'],
  ['技能方向', 'SKILLS', 'strengths'],
  ['联系方式', 'CONTACT', 'contact'],
]

function StaggeredMenu({ open, onToggle, onNavigate }) {
  useEffect(() => {
    if (!open) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onToggle(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open, onToggle])

  return (
    <>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" onClick={() => onToggle(!open)} aria-expanded={open} aria-controls="site-menu">
        {open ? <X size={19} /> : <Menu size={19} />}
        <span>菜单</span>
      </button>
      <div className={`staggered-menu ${open ? 'is-open' : ''}`} id="site-menu" aria-hidden={!open}>
        <button className="menu-backdrop" type="button" onClick={() => onToggle(false)} aria-label="关闭菜单" tabIndex={open ? 0 : -1} />
        <aside className="menu-panel">
          <div className="menu-panel-top"><span>视觉档案 / NAV</span><span>2025—至今</span></div>
          <nav className="menu-nav" aria-label="页面导航">
            {menuItems.map(([label, english, target], index) => (
              <button className="menu-item" style={{ '--menu-index': index }} type="button" key={target} onClick={() => onNavigate(target)} tabIndex={open ? 0 : -1}>
                <span className="menu-item-number">0{index + 1}</span>
                <span className="menu-item-copy"><strong>{label}</strong><small>{english}</small></span>
                <ArrowUpRight size={18} />
              </button>
            ))}
          </nav>
          <div className="menu-panel-bottom"><span>王恩涛 / 游戏视效设计</span><div><a href={bilibiliProfileUrl} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>B站主页</a><a href="mailto:wangentao9636@foxmail.com" tabIndex={open ? 0 : -1}>邮箱</a></div></div>
        </aside>
      </div>
    </>
  )
}

function FoldText({ text }) {
  return (
    <span className="fold-text" aria-label={text}>
      {[...text].map((character, index) => (
        <span className="fold-char" aria-hidden="true" style={{ '--char-index': index }} key={`${character}-${index}`}>
          {character === ' ' ? '\u00a0' : character}
        </span>
      ))}
    </span>
  )
}

function DriftWall() {
  return (
    <div className="drift-wall" aria-hidden="true">
      <div className="drift-wall-inner">
        {Array.from({ length: 5 }, (_, column) => (
          <div className="drift-column" style={{ '--column-index': column }} key={column}>
            {Array.from({ length: 12 }, (_, row) => {
              const cover = archiveWallCovers[(column * 2 + row * 3) % archiveWallCovers.length]
              return <div className="drift-tile" style={{ '--tile-tilt': `${((row + column) % 3 - 1) * 2}deg` }} key={`${column}-${row}`}><img src={cover} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" /></div>
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function GradientWaves() {
  return (
    <div className="gradient-waves" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => <span style={{ '--wave-index': index }} key={index} />)}
    </div>
  )
}

function AeroShards() {
  const shards = Array.from({ length: 18 }, (_, index) => index)

  return (
    <div className="aero-shards" aria-hidden="true">
      <div className="aero-shards-field">
        {shards.map((index) => (
          <span
            className="aero-shard"
            style={{
              '--shard-index': index,
              '--shard-x': `${(index * 37) % 104 - 2}%`,
              '--shard-y': `${(index * 61) % 112 - 6}%`,
              '--shard-width': `${80 + (index % 4) * 34}px`,
              '--shard-height': `${24 + (index % 3) * 12}px`,
              '--shard-rotate': `${-38 + (index * 29) % 76}deg`,
              '--shard-delay': `${(index % 6) * -1.8}s`,
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

function DotField() {
  const dots = Array.from({ length: 240 }, (_, index) => index)

  return (
    <div className="dot-field" aria-hidden="true">
      <div className="dot-field-grid">
        {dots.map((index) => <span className="dot-field-dot" style={{ '--dot-index': index }} key={index} />)}
      </div>
    </div>
  )
}

function LineWaves() {
  const lines = Array.from({ length: 32 }, (_, index) => index)

  useEffect(() => {
    const section = document.getElementById('strengths')
    if (!section) return undefined
    let frameId = 0
    let nextX = 0
    let nextY = 0

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return
      const rect = section.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      nextX = x * 24
      nextY = y * 18
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        section.style.setProperty('--line-mouse-x', `${nextX}px`)
        section.style.setProperty('--line-mouse-y', `${nextY}px`)
        frameId = 0
      })
    }

    const resetPointer = () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      frameId = 0
      section.style.setProperty('--line-mouse-x', '0px')
      section.style.setProperty('--line-mouse-y', '0px')
    }

    section.addEventListener('pointermove', handlePointerMove)
    section.addEventListener('pointerleave', resetPointer)
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      section.removeEventListener('pointermove', handlePointerMove)
      section.removeEventListener('pointerleave', resetPointer)
    }
  }, [])

  return (
    <div className="line-waves" aria-hidden="true">
      {lines.map((index) => <span style={{ '--line-index': index }} key={index} />)}
    </div>
  )
}

function GradualBlur() {
  return (
    <div className="gradual-blur" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => <span key={index} />)}
    </div>
  )
}

function App() {
  const [heroVideoIndex, setHeroVideoIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const rootRef = useRef(null)
  const heroVideoBvid = heroVideoBvids[heroVideoIndex]
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Menu jumps can happen while remote covers and fonts are still settling.
    // Refresh twice so ScrollTrigger uses the final section positions.
    window.setTimeout(() => {
      ScrollTrigger.refresh()
      ScrollTrigger.update()
    }, 120)
    window.setTimeout(() => {
      ScrollTrigger.refresh()
      ScrollTrigger.update()
    }, 1200)
  }
  const navigateFromMenu = (id) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHeroVideoIndex((index) => (index + 1) % heroVideoBvids.length)
    }, 80000)

    return () => window.clearTimeout(timer)
  }, [heroVideoIndex])

  useLayoutEffect(() => {
    const root = rootRef.current
    const hero = root?.querySelector('.hero')
    if (!root || !hero) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.classList.add('gsap-ready')
    if (reduceMotion) return () => document.documentElement.classList.remove('gsap-ready')

    let removePointerHandlers = () => {}
    let removeAssetRefresh = () => {}
    let removeViewportObserver = () => {}
    let refreshId = 0
    let refreshTimeout = 0
    let disposed = false
    const context = gsap.context(() => {
      const heroVisual = hero.querySelector('.hero-visual')
      const heroPaper = hero.querySelector('.hero-paper')
      const heroChars = hero.querySelectorAll('.hero-paper .fold-char')
      const heroOpening = hero.querySelector('.hero-opening')
      const intro = gsap.timeline({
        defaults: { ease: 'expo.out' },
        onStart: () => root.classList.add('gsap-playing'),
        onComplete: () => {
          root.classList.remove('gsap-playing')
          gsap.set(heroOpening, { autoAlpha: 0 })
        },
      })

      gsap.set(heroChars, { autoAlpha: 0, yPercent: 120, rotateX: -88, transformOrigin: '50% 0%' })
      intro
        .to('.hero-video-embed', { opacity: 0.22, duration: 1.8, ease: 'power2.out' }, 0)
        .fromTo('.hero-opening-left', { xPercent: 0 }, { xPercent: -100, duration: 1.15, ease: 'expo.inOut' }, 0.05)
        .fromTo('.hero-opening-right', { xPercent: 0 }, { xPercent: 100, duration: 1.15, ease: 'expo.inOut' }, 0.05)
        .fromTo('.topbar', { autoAlpha: 0, y: -28 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.28)
        .fromTo('.hero-rail-left', { autoAlpha: 0, x: -72, clipPath: 'inset(0 100% 0 0)' }, { autoAlpha: 1, x: 0, clipPath: 'inset(0 0% 0 0)', duration: 0.9 }, 0.36)
        .fromTo('.hero-rail-right', { autoAlpha: 0, x: 72, clipPath: 'inset(0 0 0 100%)' }, { autoAlpha: 1, x: 0, clipPath: 'inset(0 0 0 0%)', duration: 0.9 }, 0.42)
        .fromTo('.hero-visual', { autoAlpha: 0, y: 94, scale: 1.1, rotate: -3.5, clipPath: 'inset(0 14% 100% 14%)' }, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, clipPath: 'inset(0 0% 0% 0%)', duration: 1.35 }, 0.34)
        .fromTo('.hero-paper', { autoAlpha: 0, y: 132, scaleX: 0.74, scaleY: 1.12, rotate: -5, clipPath: 'inset(0 18% 100% 18%)' }, { autoAlpha: 1, y: 0, scaleX: 1, scaleY: 1, rotate: -1, clipPath: 'inset(0 0% 0% 0%)', duration: 1.35, ease: 'power4.out' }, 0.68)
        .to(heroChars, { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.82, stagger: 0, ease: 'expo.out' }, 1.55)
        .fromTo('.hero-title-wrap p', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65 }, 1.86)
        .fromTo('.hero-footer', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.75 }, 1.72)

      const visualX = gsap.quickTo(heroVisual, 'x', { duration: 0.85, ease: 'power3.out' })
      const visualY = gsap.quickTo(heroVisual, 'y', { duration: 0.85, ease: 'power3.out' })
      const paperX = gsap.quickTo(heroPaper, 'x', { duration: 0.95, ease: 'power3.out' })
      const paperY = gsap.quickTo(heroPaper, 'y', { duration: 0.95, ease: 'power3.out' })

      const handlePointerMove = (event) => {
        if (event.pointerType === 'touch') return
        const x = (event.clientX / window.innerWidth - 0.5) * 52
        const y = (event.clientY / window.innerHeight - 0.5) * 34
        visualX(x * 0.55)
        visualY(y * 0.55)
        paperX(x * 1.15)
        paperY(y * 1.15)
      }

      const resetParallax = () => {
        visualX(0)
        visualY(0)
        paperX(0)
        paperY(0)
      }

      hero.addEventListener('pointermove', handlePointerMove)
      hero.addEventListener('pointerleave', resetParallax)
      removePointerHandlers = () => {
        hero.removeEventListener('pointermove', handlePointerMove)
        hero.removeEventListener('pointerleave', resetParallax)
      }

      root.querySelectorAll('.section:not(.hero)').forEach((section) => {
        const englishTitle = section.querySelector('[data-motion-title]')
        const sectionLabel = section.querySelector('.section-label')
        const heading = section.querySelector('h2')
        const headingChars = heading?.querySelectorAll('.fold-char')
        const paragraphs = section.querySelectorAll('.about-copy .body-copy, .projects-intro > p, .archive-head > p, .strengths-head > p, .contact-main .email-link, .contact-main .phone-link')
        const cards = section.querySelectorAll('.border-glow, .archive-row, .strength-card, .stats > div')
        const images = section.querySelectorAll('.project-image')
        const imageContents = section.querySelectorAll('.project-image img')
        const portrait = section.querySelector('.portrait-wrap')
        const aboutCopy = section.querySelector('.about-copy')
        const footer = section.querySelector('footer')
        const timeline = gsap.timeline({
          defaults: { ease: 'power4.out' },
          scrollTrigger: { trigger: section, start: 'top 76%', once: true },
          onStart: () => root.classList.add('gsap-playing'),
          onComplete: () => root.classList.remove('gsap-playing'),
        })

        if (englishTitle) {
          gsap.set(englishTitle, { autoAlpha: 0, yPercent: 115, scaleX: 1.08, clipPath: 'inset(0 0 100% 0)', transformOrigin: 'right center' })
          timeline.to(englishTitle, { autoAlpha: 0.34, yPercent: 0, scaleX: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.15, ease: 'expo.out' })
        }

        if (sectionLabel) {
          // Move the compact index row as one layer. The oversized English title
          // has its own reveal, so the parent must not clip its absolute child.
          gsap.set(sectionLabel, { autoAlpha: 0, x: -46 })
          timeline.to(sectionLabel, { autoAlpha: 1, x: 0, duration: 0.72 }, '-=0.72')
        }

        if (heading) {
          gsap.set(heading, { autoAlpha: 0, y: 76, scaleX: 0.9, transformOrigin: 'left center' })
          gsap.set(headingChars, { autoAlpha: 0, yPercent: 115, rotateX: -74, transformOrigin: '50% 0%' })
          timeline.to(heading, { autoAlpha: 1, y: 0, scaleX: 1, duration: 0.9 }, '-=0.38')
          timeline.to(headingChars, { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.72, stagger: 0.035, ease: 'expo.out' }, '-=0.62')
        }

        if (portrait) {
          gsap.set(portrait, { autoAlpha: 0, x: -76, clipPath: 'inset(0 100% 0 0)' })
          timeline.to(portrait, { autoAlpha: 1, x: 0, clipPath: 'inset(0 0% 0 0)', duration: 1.05 }, '-=0.42')
        }

        if (aboutCopy) {
          gsap.set(aboutCopy, { autoAlpha: 0, x: 76 })
          timeline.to(aboutCopy, { autoAlpha: 1, x: 0, duration: 1.05 }, '-=0.88')
        }

        if (paragraphs.length) {
          gsap.set(paragraphs, { autoAlpha: 0, y: 28 })
          timeline.to(paragraphs, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09 }, '-=0.55')
        }

        if (cards.length) {
          gsap.set(cards, { autoAlpha: 0, y: 92, scale: 0.94 })
          timeline.to(cards, { autoAlpha: 1, y: 0, scale: 1, duration: 1.05, stagger: 0.12, ease: 'power3.out' }, '-=0.35')
        }

        if (images.length) {
          gsap.set(images, { clipPath: 'inset(0 0 100% 0)' })
          gsap.set(imageContents, { scale: 1.14 })
          timeline.to(images, { clipPath: 'inset(0 0 0% 0)', duration: 1.08, stagger: 0.12, ease: 'power4.out' }, '-=0.78')
          timeline.to(imageContents, { scale: 1, duration: 1.28, stagger: 0.12, ease: 'power3.out' }, '<')
        }

        if (footer) {
          gsap.set(footer, { autoAlpha: 0, y: 32 })
          timeline.to(footer, { autoAlpha: 1, y: 0, duration: 0.72 }, '-=0.48')
        }
      })

      const refreshAfterAssetLoad = () => {
        if (disposed) return
        window.clearTimeout(refreshTimeout)
        refreshTimeout = window.setTimeout(() => {
          refreshTimeout = 0
          if (!disposed) ScrollTrigger.refresh()
        }, 160)
      }
      window.addEventListener('load', refreshAfterAssetLoad, { passive: true })
      document.fonts?.ready.then(refreshAfterAssetLoad)
      removeAssetRefresh = () => {
        window.clearTimeout(refreshTimeout)
        refreshTimeout = 0
        window.removeEventListener('load', refreshAfterAssetLoad)
      }

      if ('IntersectionObserver' in window) {
        const animatedSections = root.querySelectorAll('.about, .projects, .archive, .strengths, .contact')
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting))
        }, { rootMargin: '18% 0px 18% 0px', threshold: 0.01 })
        animatedSections.forEach((section) => observer.observe(section))
        root.classList.add('has-viewport-observer')
        removeViewportObserver = () => {
          observer.disconnect()
          root.classList.remove('has-viewport-observer')
        }
      }
      refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh())
    }, root)

    return () => {
      disposed = true
      removePointerHandlers()
      removeAssetRefresh()
      removeViewportObserver()
      if (refreshId) window.cancelAnimationFrame(refreshId)
      context.revert()
      document.documentElement.classList.remove('gsap-ready')
      root.classList.remove('gsap-playing')
    }
  }, [])

  return (
    <main ref={rootRef}>
      <GradualBlur />
      <StaggeredMenu open={menuOpen} onToggle={setMenuOpen} onNavigate={navigateFromMenu} />
      <section className="hero" id="top">
        <iframe
          key={heroVideoBvid}
          className="hero-video-embed"
          src={`https://player.bilibili.com/player.html?bvid=${heroVideoBvid}&autoplay=1&muted=1&loop=1&danmaku=0&high_quality=0&as_wide=1`}
          title="源·世界 5.2 版本 PV"
          allow="autoplay; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="eager"
        />
        <div className="hero-player-mask" aria-hidden="true" />
        <div className="hero-vignette" />
        <div className="hero-grain" />
        <div className="hero-opening" aria-hidden="true"><span className="hero-opening-left" /><span className="hero-opening-right" /></div>
        <header className="topbar shell">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="回到顶部">
            <span className="brand-mark">W</span>
            <span>王恩涛 / 游戏视效设计</span>
          </button>
          <span className="topbar-center">视觉档案 · 2025—至今</span>
          <button className="topbar-contact" onClick={() => scrollTo('contact')}><Mail size={14} /> 联系我</button>
        </header>

        <div className="hero-stage shell">
          <aside className="hero-rail hero-rail-left">
            <span className="rail-number">01</span>
            <span className="rail-title">个人档案</span>
            <span className="rail-line" />
            <button onClick={() => scrollTo('about')}>查看经历 <ArrowUpRight size={14} /></button>
          </aside>

          <div className="hero-visual" aria-hidden="true">
            <span className="visual-orbit visual-orbit-one" />
            <span className="visual-orbit visual-orbit-two" />
            <div className="hero-art-frame"><img src={`${assetBase}assets/hero-character.jpg`} alt="" fetchPriority="high" decoding="async" /></div>
            <span className="visual-cross cross-left">+</span>
            <span className="visual-cross cross-right">+</span>
          </div>

          <div className="hero-paper">
            <div className="paper-topline"><span>游戏宣发</span><span>Unity / AE / Blender / PS</span><span>01 / 05</span></div>
            <div className="hero-title-wrap">
              <span className="title-kicker">PV / MV / Unity 视效制作</span>
              <h1><FoldText text="视效" /><em><FoldText text="合成" /></em></h1>
              <p>场景、灯光、特效与后期，服务于每一支游戏宣传片。</p>
            </div>
            <div className="paper-bottomline"><span>王恩涛 / 游戏视效设计师</span></div>
          </div>

          <aside className="hero-rail hero-rail-right">
            <span className="rail-number">02</span>
            <span className="rail-title">视觉项目</span>
            <span className="rail-line" />
            <div className="rail-copy">PV / MV<br />视效制作<br />后期合成</div>
          </aside>
        </div>

        <div className="hero-footer shell">
          <span>视觉实验 / 2025</span>
          <button onClick={() => scrollTo('about')}><ArrowDown size={16} /> 向下浏览</button>
          <span>中国 · 山东</span>
        </div>
      </section>

      <section className="about section" id="about">
        <AeroShards />
        <div className="shell">
          <SectionLabel number="01 / 个人档案" note="游戏宣发视觉设计" english="PROFILE"><FoldText text="个人档案" /></SectionLabel>
          <div className="about-layout">
            <div className="portrait-wrap">
              <div className="portrait-frame"><img src={bilibiliAvatarUrl} loading="lazy" decoding="async" referrerPolicy="no-referrer" alt="王恩涛的 B 站头像" /></div>
              <span className="portrait-caption">个人档案 / 2025</span>
              <span className="portrait-line portrait-line-one" /><span className="portrait-line portrait-line-two" />
            </div>
            <div className="about-copy">
              <span className="copy-kicker">游戏 PV / MV / 视效制作</span>
              <h2><FoldText text="宣发视觉工作：" /><br /><em><FoldText text="场景、灯光、特效和后期。" /></em></h2>
              <p className="body-copy">毕业于安徽工业大学艺术系环境设计专业。2025 年加入厦门勇仕网络，从 PV 设计实习生开始，逐步成长为单项目 PV 宣发负责人，负责视觉制作、流程规范与新人培训。</p>
              <div className="about-meta">
                <div><span>所在城市</span><strong>菏泽 / 山东</strong></div>
                <div><span>教育经历</span><strong>安徽工业大学 · 环境设计</strong></div>
                <div><span>电子邮箱</span><strong>wangentao9636@foxmail.com</strong></div>
                <div><span>B站主页</span><a className="profile-link" href={bilibiliProfileUrl} target="_blank" rel="noreferrer">芍药紫御 / 个人主页 <ArrowUpRight size={13} /></a></div>
              </div>
              <button className="text-link" onClick={() => scrollTo('contact')}>联系我 <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="stats">
            <div><strong>2025</strong><span>开始从事<br />视效设计</span></div>
            <div><strong>03</strong><span>阶段<br />经历</span></div>
            <div><strong>60%</strong><span>单项目 PV<br />内容占比</span></div>
            <div><strong>50%</strong><span>自主完成<br />视觉内容</span></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <GradientWaves />
        <div className="shell">
          <SectionLabel number="02 / 精选作品" note="近期参与制作的代表项目" english="SELECTED WORKS"><FoldText text="作品选集" /></SectionLabel>
          <div className="projects-intro"><div><span className="copy-kicker">SELECTED VISUALS</span><h2><FoldText text="让镜头有情绪，" /><br /><em><FoldText text="让画面有回声。" /></em></h2></div><p>从角色印象曲、联动版本 PV 到完整的视觉包装，记录参与制作的公开项目。</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <BorderGlow key={project.number}>
                <article className={`project-card ${project.tone}`}>
                  <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" decoding="async" referrerPolicy="no-referrer" /><div className="image-wash" /></div>
                  <div className="project-top"><span className="shiny-hover">{project.number}</span><span className="shiny-hover">{project.year}</span></div>
                  <div className="project-info"><div><span className="project-category shiny-hover">{project.category}</span><h3><FoldText text={project.title} /></h3><p className="shiny-hover">{project.subtitle}</p></div><a className="project-open" href={project.url} target="_blank" rel="noreferrer" aria-label={`在 B 站查看 ${project.title}`}><ArrowUpRight size={20} /></a></div>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="archive section" id="archive">
        <DriftWall />
        <div className="shell">
          <SectionLabel number="03 / 作品归档" note="公开发布的 PV / MV 作品" english="ARCHIVE"><FoldText text="公开作品" /></SectionLabel>
          <div className="archive-head"><h2><FoldText text="一条持续更新的" /><br /><em><FoldText text="视效轨迹。" /></em></h2><p>用作品记录镜头、节奏与光影，也记录每一次从概念到交付的过程。</p></div>
          <div className="archive-list">
            {videoArchive.slice().reverse().map(([index, title, type, url]) => <a className="archive-row" href={url} target="_blank" rel="noreferrer" key={index}><span className="archive-index">{index}</span><span className="archive-title">{title}</span><span className="archive-type">{type}</span><ArrowUpRight size={17} /></a>)}
          </div>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="shell">
          <LineWaves />
          <SectionLabel number="04 / 技能方向" note="项目参与与制作记录" english="SKILLS"><FoldText text="技能方向" /></SectionLabel>
          <div className="strengths-head"><h2><FoldText text="从参与制作，" /><br /><em><FoldText text="到独立负责。" /></em></h2><p>记录项目里的参与、负责与成长，<br />也记录每一次制作留下的经验。</p></div>
          <div className="strength-grid">
            {strengths.map(([index, title, copy]) => <article className="strength-card" key={index}><div className="strength-top"><span>{index}</span><Plus size={16} /></div><h3><FoldText text={title} /></h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <DotField />
        <div className="contact-rings" />
        <div className="shell contact-inner">
          <SectionLabel number="05 / 联系方式" note="欢迎一起制作有记忆点的作品" english="CONTACT"><FoldText text="联系我" /></SectionLabel>
          <div className="contact-main"><span className="contact-kicker"><Sparkles size={14} /> 欢迎 PV / MV / 视效项目合作</span><h2><FoldText text="一起做点" /><br /><em><FoldText text="有记忆的事。" /></em></h2><a className="email-link" href="mailto:wangentao9636@foxmail.com">wangentao9636@foxmail.com <ArrowUpRight size={22} /></a><a className="phone-link" href="tel:15554527386">电话：155 5452 7386</a></div>
          <footer><span>© 2025 王恩涛</span><span>山东 / 中国</span><div className="footer-links"><a href="#top">微信：W15554527386</a><a href="#top">QQ：2505690778</a></div></footer>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
