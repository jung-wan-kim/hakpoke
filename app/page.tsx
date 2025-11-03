'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

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
    <div className="bg-white">
      {/* 히어로 섹션 - WhatsApp 스타일: 깔끔하고 넓은 여백 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-purple-50">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div
            className="inline-block mb-6 px-6 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            당신을 위한 안전한 공간
          </div>

          <h1
            className="hero-heading text-gray-900 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            혼자가 아닙니다
          </h1>

          <p
            className="body-large text-gray-600 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            학교폭력으로 힘든 시간을 보내고 계신가요?<br />
            <span className="text-gray-900 font-semibold">당신은 잘못하지 않았습니다.</span> 우리가 함께합니다.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-scale-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Link
              href="/report"
              className="btn-hover px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              지금 도움받기
            </Link>
            <Link
              href="/hope"
              className="btn-hover px-8 py-4 bg-white text-gray-700 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300"
            >
              희망의 이야기 보기
            </Link>
          </div>

          {/* 신뢰 지표 */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500 opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% 익명 보장</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24시간 상담 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>전문가 지원</span>
            </div>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">아래로 스크롤</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* 메시지 섹션 - 위로와 공감 */}
      <section className="scroll-reveal py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-gray-900 mb-6">
            당신의 고통을 이해합니다
          </h2>
          <p className="body-large text-gray-600 leading-relaxed">
            복도를 지나갈 때마다 들리는 속삭임,<br />
            급식실에서 혼자 앉아야 하는 시간,<br />
            아무도 내 편이 없는 것 같은 외로움.<br />
            <br />
            <span className="text-gray-900 font-semibold">그 고통, 우리는 압니다.</span>
          </p>
        </div>
      </section>

      {/* 통계 카드 섹션 - WhatsApp 스타일 카드 */}
      <section className="scroll-reveal py-24 px-6 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center text-gray-900 mb-4">
            당신은 혼자가 아닙니다
          </h2>
          <p className="text-center text-gray-600 mb-16 body-large">
            많은 학생들이 이미 용기를 내어 문제를 해결했습니다
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '87%',
                label: '성공적인 해결',
                description: '신고한 학생 중 대부분이 문제를 해결했습니다',
                color: 'teal'
              },
              {
                number: '24시간',
                label: '언제든 도움',
                description: '밤낮없이 당신을 도와줄 준비가 되어있습니다',
                color: 'purple'
              },
              {
                number: '100%',
                label: '익명 보장',
                description: '당신의 신원은 완벽하게 보호됩니다',
                color: 'blue'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="card-interactive bg-white rounded-3xl p-8 text-center soft-shadow"
              >
                <div className={`text-6xl font-bold mb-4 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 행동 촉구 섹션 */}
      <section className="scroll-reveal py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-gray-900 mb-6">
            알아야 할 것들
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">이건 당신 잘못이 아닙니다</h3>
                  <p className="text-gray-700">어떤 이유로도 폭력은 정당화될 수 없습니다</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">법이 당신을 보호합니다</h3>
                  <p className="text-gray-700">학교폭력예방법이 당신의 권리를 지켜줍니다</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">도움을 요청할 수 있습니다</h3>
                  <p className="text-gray-700">전문가들이 당신을 기다리고 있습니다</p>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-block bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-2xl p-8 text-center">
            <p className="text-2xl md:text-3xl font-bold mb-2">당신은 이길 수 있습니다</p>
            <p className="text-teal-100">지금 용기를 내어 첫 걸음을 내딛으세요</p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 - 강력한 행동 촉구 */}
      <section className="scroll-reveal py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-teal-500 via-teal-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="section-heading mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="body-large mb-12 text-teal-50">
            하루하루가 고통스럽다는 것, 압니다.<br />
            <span className="font-bold text-white">하지만 더 이상 참지 마세요.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/report"
              className="btn-hover px-10 py-5 bg-white text-teal-600 rounded-full font-bold text-lg shadow-xl"
            >
              지금 신고하기
            </Link>
            <Link
              href="/info"
              className="btn-hover px-10 py-5 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-teal-600"
            >
              정보 먼저 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 긴급 연락처 - 눈에 잘 띄는 디자인 */}
      <section className="scroll-reveal py-24 px-6 sm:px-8 lg:px-12 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              긴급 상황
            </div>
            <h2 className="section-heading text-gray-900">
              지금 당장 위험하다면
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                number: '117',
                label: '학교폭력신고센터',
                description: '24시간 전문 상담 가능',
                color: 'bg-blue-500'
              },
              {
                number: '112',
                label: '경찰 긴급신고',
                description: '즉시 도움을 받을 수 있습니다',
                color: 'bg-red-500'
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.number}`}
                className="card-interactive bg-white rounded-2xl p-8 text-center soft-shadow-lg"
              >
                <p className="text-gray-700 font-semibold mb-3">{contact.label}</p>
                <p className={`text-6xl md:text-7xl font-black ${contact.color.replace('bg-', 'text-')} mb-3`}>
                  {contact.number}
                </p>
                <p className="text-gray-600">{contact.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>탭하여 전화 걸기</span>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            망설이지 마세요. 도움을 요청하는 것은 용기있는 행동입니다.
          </p>
        </div>
      </section>

      {/* 푸터 메시지 */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">
          당신의 안전과 행복이 가장 중요합니다
        </p>
        <p className="text-gray-500 text-xs mt-2">
          © 2025 학교폭력 방지 센터. 모든 상담 내역은 철저히 보호됩니다.
        </p>
      </section>
    </div>
  )
}
