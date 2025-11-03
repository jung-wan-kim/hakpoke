'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // 스크롤 기반 애니메이션
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
    <>
      {/* 히어로 섹션 - 비디오 배경 효과 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 비디오 배경 (CSS 애니메이션) */}
        <div className="video-background">
          {/* 떨어지는 파티클 (눈물 효과) */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />

        {/* 콘텐츠 */}
        <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-red-400 text-2xl md:text-4xl mb-8 font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              "혼자가 아닙니다"
            </p>
          </div>

          <h1 className="hero-title text-white mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            당신의<br />
            고통을<br />
            우리가<br />
            함께합니다
          </h1>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="hero-subtitle text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              학교폭력으로 힘든 시간을 보내고 계신가요?<br />
              더 이상 혼자 견디지 마세요.<br />
              <br />
              <span className="text-white font-semibold text-4xl md:text-5xl">당신은 잘못하지 않았습니다.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-scale-in" style={{ animationDelay: '1.4s' }}>
            <Link
              href="/hope"
              className="group relative px-12 py-6 bg-red-600 text-white rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
            >
              <span className="relative z-10">희망의 이야기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
            <Link
              href="/report"
              className="group relative px-12 py-6 bg-white text-gray-900 rounded-full font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">지금 도움받기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <p className="text-sm tracking-wider uppercase">Scroll</p>
            <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* 공감 섹션 - 큰 타이포그래피 */}
      <section className="scroll-reveal bg-black text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-transparent to-blue-900 animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <blockquote className="text-5xl md:text-7xl lg:text-8xl font-light italic border-l-8 border-red-500 pl-12 mb-16 text-red-400 leading-tight">
            "아무도 내 말을<br />
            믿어주지 않을 것<br />
            같아요..."
          </blockquote>

          <div className="space-y-12 text-2xl md:text-3xl text-gray-300 leading-relaxed">
            <p className="transform hover:scale-105 transition-transform duration-500">
              복도를 지나갈 때마다 들리는 속삭임.<br />
              급식실에서 혼자 앉아야 하는 시간.<br />
              아무도 내 편이 없는 것 같은 외로움.
            </p>
            <p className="text-white font-semibold text-4xl md:text-5xl">
              그 고통, 우리는 압니다.
            </p>
            <p className="transform hover:scale-105 transition-transform duration-500">
              <strong className="text-white text-4xl">당신만 겪는 일이 아닙니다.</strong><br />
              많은 학생들이 지금 이 순간에도 같은 고통을 겪고 있습니다.
            </p>
            <div className="pt-8">
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-blue-400 animate-pulse">
                반드시 나아질 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 전환점 섹션 */}
      <section className="scroll-reveal relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20 animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 text-white leading-none">
            하지만<br />
            알아야<br />
            합니다
          </h2>
          <div className="text-3xl md:text-4xl lg:text-5xl space-y-8 text-gray-200 font-light leading-relaxed">
            <p className="transform hover:scale-105 transition-transform duration-500">이건 당신 잘못이 아닙니다.</p>
            <p className="transform hover:scale-105 transition-transform duration-500">법이 당신을 보호합니다.</p>
            <p className="transform hover:scale-105 transition-transform duration-500">도움을 요청할 수 있습니다.</p>
            <div className="pt-12">
              <p className="text-6xl md:text-7xl lg:text-8xl font-black text-red-500 animate-pulse">
                당신은<br />이길 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="scroll-reveal bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-24 text-gray-900 leading-tight">
            많은 학생들이<br />이미 극복했습니다
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: '87%', label: '성공적인 해결', desc: '신고한 학생 중 대부분이 문제를 해결했습니다', color: 'red' },
              { number: '24시간', label: '언제든 도움', desc: '밤낮없이 당신을 도와줄 준비가 되어있습니다', color: 'blue' },
              { number: '100%', label: '익명 보장', desc: '당신의 신원은 완벽하게 보호됩니다', color: 'green' }
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl text-center overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`text-7xl md:text-8xl font-black text-${stat.color}-500 mb-6`}>
                    {stat.number}
                  </div>
                  <div className="text-2xl font-bold mb-4 text-white">{stat.label}</div>
                  <p className="text-gray-300 text-lg leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 행동 촉구 섹션 */}
      <section className="scroll-reveal relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-6xl md:text-8xl font-black mb-12 leading-tight">
            지금 바로<br />시작하세요
          </h2>
          <p className="text-2xl md:text-4xl mb-16 leading-relaxed font-light">
            하루하루가 고통스럽다는 것, 압니다.<br />
            <strong className="font-bold text-5xl">하지만 더 이상 참지 마세요.</strong><br />
            <br />
            첫 걸음을 내딛는 것만으로도<br />
            당신은 이미 용감한 사람입니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/report"
              className="group relative px-16 py-7 bg-white text-red-600 rounded-full font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">📝 지금 신고하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
            <Link
              href="/info"
              className="group relative px-16 py-7 bg-gray-900 text-white rounded-full font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">📚 정보 먼저 보기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 긴급 연락처 섹션 */}
      <section className="scroll-reveal bg-gradient-to-br from-yellow-50 to-orange-50 py-24 px-6 border-t-8 border-yellow-400">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 text-gray-900">
            지금 당장 위험하다면
          </h2>
          <p className="text-center text-2xl mb-12 text-gray-700 font-light">
            긴급한 상황에서는 주저하지 말고 바로 연락하세요
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { number: '117', label: '학교폭력신고센터', desc: '24시간 상담 가능' },
              { number: '112', label: '경찰 긴급신고', desc: '즉시 도움' }
            ].map((contact, i) => (
              <a
                key={i}
                href={`tel:${contact.number}`}
                className="group bg-white p-12 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <p className="text-xl font-semibold mb-4 text-gray-700">{contact.label}</p>
                <p className="text-8xl font-black text-blue-600 group-hover:text-blue-700 mb-4 transition-colors">
                  {contact.number}
                </p>
                <p className="text-gray-600 text-lg">{contact.desc}</p>
              </a>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600">
            모든 통화는 비밀이 보장되며, 전문 상담사가 도와드립니다
          </p>
        </div>
      </section>
    </>
  )
}
