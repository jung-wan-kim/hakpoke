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
    <div className="bg-white">
      {/* 히어로 - 첫 고백: "저도 당했습니다" */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-white mb-8 opacity-0 animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              animationDelay: '0.3s'
            }}
          >
            저도 당했습니다
          </h1>

          <p
            className="text-gray-300 mb-12 opacity-0 animate-fade-in"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: 1.6,
              animationDelay: '0.6s'
            }}
          >
            20년 전, 저는 여러분과 같은 학생이었습니다
          </p>

          <div
            className="inline-block opacity-0 animate-scale-in"
            style={{ animationDelay: '0.9s' }}
          >
            <svg className="w-12 h-12 mx-auto text-gray-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 과거 - 구체적인 피해 경험 */}
      <section className="scroll-reveal py-32 px-6 bg-gradient-to-b from-gray-900 to-red-950">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-red-400 mb-16 text-center"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            복도 끝 화장실에 숨어서
          </h2>

          <div className="space-y-8 text-gray-300" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: 1.8 }}>
            <p>점심시간마다 혼자 숨어야 했습니다</p>
            <p>급식실은 제게 전쟁터였고</p>
            <p>복도는 공포의 통로였습니다</p>
            <p className="text-white font-semibold pt-8">죽지 않고 살아있었습니다</p>
          </div>
        </div>
      </section>

      {/* 전환점 - "그래서 변호사가 되었다" */}
      <section className="scroll-reveal py-32 px-6 bg-gradient-to-b from-red-950 via-gray-800 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-white mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            그래서
            <br />
            변호사가 되었습니다
          </h2>

          <p
            className="text-gray-300 mb-16"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: 1.6
            }}
          >
            더 이상 아무도 혼자 싸우지 않도록
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto" />
        </div>
      </section>

      {/* 현재 - 전문성과 신뢰 */}
      <section className="scroll-reveal py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-gray-900 mb-20 text-center"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            이제 제가 여러분의 편입니다
          </h2>

          {/* 통계 - WhatsApp 스타일 심플 카드 */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-3xl p-12 text-center shadow-lg border border-gray-100">
              <div
                className="text-green-600 font-bold mb-4"
                style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
              >
                230건
              </div>
              <p className="text-gray-600" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
                승소한 사건
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 text-center shadow-lg border border-gray-100">
              <div
                className="text-green-600 font-bold mb-4"
                style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
              >
                15년
              </div>
              <p className="text-gray-600" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
                학교폭력 전문 경력
              </p>
            </div>
          </div>

          {/* 메시지 - 강력한 확신 */}
          <div className="text-center">
            <h3
              className="text-gray-900 font-bold mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              제가 증거입니다
            </h3>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: 1.6 }}
            >
              피해자에서 변호사가 된 제가<br />
              당신도 이길 수 있다는 살아있는 증거입니다
            </p>
          </div>
        </div>
      </section>

      {/* CTA - WhatsApp 스타일 심플 버튼 */}
      <section className="scroll-reveal py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-gray-900 mb-8"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            저와 함께 싸우시겠습니까?
          </h2>

          <p
            className="text-gray-600 mb-12"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: 1.6 }}
          >
            당신은 혼자가 아닙니다<br />
            <span className="font-semibold text-gray-900">당신도 할 수 있습니다</span>
          </p>

          {/* WhatsApp 스타일 큰 녹색 버튼 */}
          <Link
            href="/report"
            className="inline-flex items-center gap-3 px-12 py-6 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            지금 전화하세요
          </Link>

          <p className="mt-6 text-gray-500 text-sm">
            24시간 상담 가능 · 첫 상담 무료
          </p>
        </div>
      </section>

      {/* 긴급 연락처 */}
      <section className="scroll-reveal py-24 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-gray-900 text-center mb-12 font-bold"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            지금 당장 위험하다면
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:117"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <p className="text-gray-700 font-semibold mb-3">학교폭력신고센터</p>
              <p className="text-blue-600 font-black mb-2" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)' }}>
                117
              </p>
              <p className="text-gray-600 text-sm">24시간 전문 상담</p>
            </a>

            <a
              href="tel:112"
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <p className="text-gray-700 font-semibold mb-3">경찰 긴급신고</p>
              <p className="text-red-600 font-black mb-2" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)' }}>
                112
              </p>
              <p className="text-gray-600 text-sm">즉시 도움</p>
            </a>
          </div>
        </div>
      </section>

      {/* 변호사 서명 */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <p className="text-gray-400 mb-2" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          학교폭력 전문 변호사
        </p>
        <p className="text-white font-semibold" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
          김 변호사
        </p>
        <p className="text-gray-500 text-xs mt-4">
          © 2025 모든 상담 내역은 철저히 보호됩니다
        </p>
      </section>
    </div>
  )
}
