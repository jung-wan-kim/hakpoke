'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // 스크롤 기반 애니메이션
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
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

    // 비디오 자동 재생
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 자동재생 실패 시 무시
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* 히어로 섹션 - 실제 비디오 배경 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        {/* 비디오 배경 */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
            style={{ filter: 'grayscale(100%) brightness(0.4)' }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-lonely-student-sitting-on-stairs-8584/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 text-center px-6 max-w-[90rem] mx-auto">
          <p
            className="text-red-400/90 mb-12 opacity-0 animate-fade-in"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              animationDelay: '0.3s'
            }}
          >
            "혼자가 아닙니다"
          </p>

          <h1
            className="text-white mb-16 opacity-0 animate-fade-in-up leading-[0.85]"
            style={{
              fontSize: 'clamp(4rem, 15vw, 20rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              animationDelay: '0.6s',
              textShadow: '0 20px 80px rgba(0,0,0,0.9)'
            }}
          >
            당신의
            <br />
            고통을
          </h1>

          <p
            className="text-gray-300 mb-20 max-w-4xl mx-auto opacity-0 animate-fade-in leading-relaxed"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)',
              fontWeight: 300,
              animationDelay: '1s'
            }}
          >
            더 이상 혼자 견디지 마세요
            <br />
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4rem)' }}>
              당신은 잘못하지 않았습니다
            </span>
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-scale-in"
            style={{ animationDelay: '1.4s' }}
          >
            <Link
              href="/hope"
              className="group relative px-14 py-7 bg-red-600 text-white rounded-full font-bold overflow-hidden transition-all duration-700"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
            >
              <span className="relative z-10">희망의 이야기</span>
              <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
            <Link
              href="/report"
              className="group relative px-14 py-7 bg-white text-gray-900 rounded-full font-bold overflow-hidden transition-all duration-700"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
            >
              <span className="relative z-10">지금 도움받기</span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: '2s' }}
        >
          <div className="flex flex-col items-center gap-4 text-gray-500">
            <p className="text-xs tracking-[0.3em] uppercase">Scroll</p>
            <div className="w-[1px] h-20 bg-gradient-to-b from-gray-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* 큰 따옴표 섹션 */}
      <section className="scroll-reveal bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white py-40 px-6 relative">
        <div className="max-w-[100rem] mx-auto">
          <blockquote
            className="text-red-400/80 font-light italic leading-[0.95] mb-20"
            style={{
              fontSize: 'clamp(3rem, 10vw, 12rem)',
              letterSpacing: '-0.02em'
            }}
          >
            "아무도
            <br />
            내 말을
            <br />
            믿어주지
            <br />
            않을 것 같아요"
          </blockquote>

          <div className="space-y-16 max-w-5xl" style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2.8rem)' }}>
            <p className="text-gray-400 font-light leading-relaxed">
              복도를 지나갈 때마다 들리는 속삭임
              <br />
              급식실에서 혼자 앉아야 하는 시간
              <br />
              아무도 내 편이 없는 것 같은 외로움
            </p>

            <p
              className="text-white font-medium"
              style={{ fontSize: 'clamp(2rem, 4vw, 5rem)' }}
            >
              그 고통, 우리는 압니다
            </p>
          </div>
        </div>
      </section>

      {/* 전환 섹션 */}
      <section className="scroll-reveal relative py-48 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#2a2a2a] to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="font-black mb-24 leading-[0.9]"
            style={{
              fontSize: 'clamp(4rem, 12vw, 15rem)',
              background: 'linear-gradient(to bottom, #fff 0%, #888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.03em'
            }}
          >
            하지만
            <br />
            알아야
            <br />
            합니다
          </h2>

          <div
            className="space-y-10 text-gray-300 font-light"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4rem)' }}
          >
            <p>이건 당신 잘못이 아닙니다</p>
            <p>법이 당신을 보호합니다</p>
            <p>도움을 요청할 수 있습니다</p>

            <p
              className="pt-16 font-black text-red-500"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 8rem)' }}
            >
              당신은
              <br />
              이길 수 있습니다
            </p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 - 밝은 배경 */}
      <section className="scroll-reveal bg-[#f5f5f0] py-40 px-6">
        <div className="max-w-[100rem] mx-auto">
          <h2
            className="text-center mb-32 font-black leading-tight"
            style={{
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              color: '#1a1a1a',
              letterSpacing: '-0.02em'
            }}
          >
            많은 학생들이
            <br />
            이미 극복했습니다
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { number: '87%', label: '성공적인 해결', desc: '신고한 학생 중 대부분이\n문제를 해결했습니다' },
              { number: '24시간', label: '언제든 도움', desc: '밤낮없이 당신을 도와줄\n준비가 되어있습니다' },
              { number: '100%', label: '익명 보장', desc: '당신의 신원은\n완벽하게 보호됩니다' }
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-white p-16 rounded-3xl text-center transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
              >
                <div
                  className="font-black text-red-600 mb-8"
                  style={{ fontSize: 'clamp(4rem, 8vw, 9rem)' }}
                >
                  {stat.number}
                </div>
                <div
                  className="font-bold mb-6 text-gray-900"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}
                >
                  {stat.label}
                </div>
                <p
                  className="text-gray-600 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="scroll-reveal relative py-48 px-6 overflow-hidden bg-gradient-to-br from-red-600 to-red-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 text-white">
          <h2
            className="font-black mb-16 leading-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 12rem)' }}
          >
            지금 바로
            <br />
            시작하세요
          </h2>

          <p
            className="mb-20 font-light leading-relaxed"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 3rem)' }}
          >
            하루하루가 고통스럽다는 것, 압니다
            <br />
            <strong className="font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 4.5rem)' }}>
              하지만 더 이상 참지 마세요
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/report"
              className="group relative px-16 py-8 bg-white text-red-600 rounded-full font-bold overflow-hidden transition-all duration-700 hover:shadow-2xl"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
            >
              <span className="relative z-10">지금 신고하기</span>
              <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
            <Link
              href="/info"
              className="group relative px-16 py-8 bg-gray-900 text-white rounded-full font-bold overflow-hidden transition-all duration-700 hover:shadow-2xl"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
            >
              <span className="relative z-10">정보 먼저 보기</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </Link>
          </div>
        </div>
      </section>

      {/* 긴급 연락처 */}
      <section className="scroll-reveal bg-[#fff9eb] py-32 px-6 border-t-8 border-yellow-600">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center mb-16 font-black"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              color: '#1a1a1a'
            }}
          >
            지금 당장 위험하다면
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { number: '117', label: '학교폭력신고센터', desc: '24시간 상담 가능' },
              { number: '112', label: '경찰 긴급신고', desc: '즉시 도움' }
            ].map((contact, i) => (
              <a
                key={i}
                href={`tel:${contact.number}`}
                className="group bg-white p-16 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              >
                <p
                  className="font-semibold mb-6 text-gray-700"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}
                >
                  {contact.label}
                </p>
                <p
                  className="font-black text-blue-600 group-hover:text-blue-700 mb-6 transition-colors"
                  style={{ fontSize: 'clamp(5rem, 10vw, 11rem)' }}
                >
                  {contact.number}
                </p>
                <p
                  className="text-gray-600"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}
                >
                  {contact.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
