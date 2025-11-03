'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-windsurf-hero">
      {/* 히어로 - 첫 고백: "저도 당했습니다" */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* 배경 비디오 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
            style={{ filter: 'grayscale(100%) brightness(0.3)' }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-lonely-student-sitting-on-stairs-8584/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/80 to-[#0A1628]/95" />
          <div className="grid-background absolute inset-0" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1
            className="text-white mb-12 opacity-0 animate-fade-in-up text-windsurf-hero"
            style={{ animationDelay: '0.2s' }}
          >
            저도 당했습니다
          </h1>

          <p
            className="text-white/70 mb-16 opacity-0 animate-fade-in text-windsurf-body"
            style={{ animationDelay: '0.5s' }}
          >
            20년 전, 저는 여러분과 같은 학생이었습니다
          </p>

          <div className="flex items-center justify-center gap-4 mb-20 opacity-0 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="decorative-dot"></div>
            <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
              변호사의 고백
            </p>
          </div>

          <div
            className="inline-block opacity-0 animate-pulse-glow"
            style={{ animationDelay: '1s' }}
          >
            <svg className="w-8 h-8 mx-auto text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 과거 - 구체적인 피해 경험 */}
      <section className="scroll-reveal py-40 px-6 relative overflow-hidden">
        {/* 배경 이미지 오버레이 */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1528731708534-816fe59f90cb?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%) brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011C42] via-[#1A0B0B] to-[#1A0B0B]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-windsurf-heading text-center mb-20 glow-red" style={{ color: '#FF6B6B' }}>
            복도 끝 화장실에 숨어서
          </h2>

          <div className="space-y-10 text-white/60 text-windsurf-body max-w-3xl mx-auto">
            <p className="opacity-0 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              점심시간마다 혼자 숨어야 했습니다
            </p>
            <p className="opacity-0 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
              급식실은 제게 전쟁터였고
            </p>
            <p className="opacity-0 scroll-reveal" style={{ transitionDelay: '0.3s' }}>
              복도는 공포의 통로였습니다
            </p>
            <p className="text-white font-medium pt-12 opacity-0 scroll-reveal text-center" style={{ transitionDelay: '0.4s' }}>
              하지만 죽지 않고 살아있었습니다
            </p>
          </div>
        </div>
      </section>

      {/* 전환점 - "그래서 변호사가 되었다" */}
      <section className="scroll-reveal py-40 px-6 relative overflow-hidden">
        {/* 배경 그라데이션 및 효과 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B0B] via-[#011C42] to-[#F5F5F0]" />
          <div
            className="absolute top-0 left-0 w-full h-1/2 opacity-5"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-windsurf-hero text-white mb-12 leading-tight">
            그래서
            <br />
            변호사가 되었습니다
          </h2>

          <p className="text-white/60 mb-20 text-windsurf-body">
            더 이상 아무도 혼자 싸우지 않도록
          </p>

          <div className="decorative-line mx-auto"></div>
        </div>
      </section>

      {/* 현재 - 전문성과 신뢰 */}
      <section className="scroll-reveal py-40 px-6 bg-light-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-windsurf-heading text-center mb-24" style={{ color: '#1A1A2E' }}>
            이제 제가 여러분의 편입니다
          </h2>

          {/* 통계 - Windsurf 스타일 카드 */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="card-light p-16 text-center">
              <div
                className="font-light mb-4 glow-aqua"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 7rem)',
                  color: '#09B6A2'
                }}
              >
                230건
              </div>
              <p className="text-gray-600 text-xl font-medium">
                승소한 사건
              </p>
            </div>

            <div className="card-light p-16 text-center">
              <div
                className="font-light mb-4 glow-aqua"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 7rem)',
                  color: '#09B6A2'
                }}
              >
                15년
              </div>
              <p className="text-gray-600 text-xl font-medium">
                학교폭력 전문 경력
              </p>
            </div>
          </div>

          {/* 메시지 - 강력한 확신 */}
          <div className="text-center max-w-4xl mx-auto">
            <h3
              className="text-windsurf-subheading font-semibold mb-8"
              style={{ color: '#1A1A2E' }}
            >
              제가 증거입니다
            </h3>
            <p className="text-gray-600 text-windsurf-body leading-relaxed">
              피해자에서 변호사가 된 제가<br />
              당신도 이길 수 있다는 살아있는 증거입니다
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Windsurf 스타일 버튼 */}
      <section className="scroll-reveal py-40 px-6 relative overflow-hidden">
        {/* 배경 비디오 효과 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            style={{ filter: 'grayscale(100%) brightness(0.4)' }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-people-walking-in-school-hallway-3807/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/95 via-[#011C42]/90 to-[#0D2847]/95" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-windsurf-heading text-white mb-10">
            저와 함께 싸우시겠습니까?
          </h2>

          <p className="text-white/70 mb-16 text-windsurf-body">
            당신은 혼자가 아닙니다<br />
            <span className="text-white font-medium">당신도 할 수 있습니다</span>
          </p>

          {/* Windsurf 스타일 버튼 */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/report"
              className="btn-windsurf-primary inline-flex items-center gap-3 w-full md:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              지금 전화하세요
            </Link>

            <Link href="/info" className="btn-windsurf-secondary inline-flex items-center gap-3 w-full md:w-auto justify-center">
              더 알아보기
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="decorative-dot"></div>
            <p className="text-white/40 text-sm">
              24시간 상담 가능 · 첫 상담 무료
            </p>
          </div>
        </div>
      </section>

      {/* 긴급 연락처 */}
      <section className="scroll-reveal py-32 px-6 relative" style={{ background: 'linear-gradient(180deg, #0D2847 0%, #1A1A2E 100%)' }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="decorative-dot" style={{ background: '#FF4444' }}></div>
            <h3 className="text-white/90 text-center font-medium text-2xl uppercase tracking-widest">
              지금 당장 위험하다면
            </h3>
            <div className="decorative-dot" style={{ background: '#FF4444' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:117"
              className="card-windsurf p-12 text-center group"
            >
              <p className="text-white/70 font-medium mb-4 text-sm uppercase tracking-wider">
                학교폭력신고센터
              </p>
              <p
                className="text-white font-light mb-3 transition-all duration-300 group-hover:glow-aqua"
                style={{ fontSize: 'clamp(4rem, 10vw, 5.5rem)', color: '#09B6A2' }}
              >
                117
              </p>
              <p className="text-white/50 text-sm">24시간 전문 상담</p>
            </a>

            <a
              href="tel:112"
              className="card-windsurf p-12 text-center group"
            >
              <p className="text-white/70 font-medium mb-4 text-sm uppercase tracking-wider">
                경찰 긴급신고
              </p>
              <p
                className="text-white font-light mb-3 transition-all duration-300 group-hover:glow-red"
                style={{ fontSize: 'clamp(4rem, 10vw, 5.5rem)', color: '#FF4444' }}
              >
                112
              </p>
              <p className="text-white/50 text-sm">즉시 도움</p>
            </a>
          </div>
        </div>
      </section>

      {/* 변호사 서명 */}
      <section className="py-20 px-6 text-center relative z-10" style={{ background: '#0A1628' }}>
        <p className="text-white/40 mb-3 text-sm uppercase tracking-widest font-medium">
          학교폭력 전문 변호사
        </p>
        <p className="text-white font-light text-3xl mb-8">
          김 변호사
        </p>
        <div className="decorative-line mx-auto mb-8"></div>
        <p className="text-white/30 text-xs tracking-wide">
          © 2025 모든 상담 내역은 철저히 보호됩니다
        </p>
      </section>
    </div>
  )
}
