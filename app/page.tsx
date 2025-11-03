import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 - 감성적 시작 */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-red-400 text-2xl md:text-3xl mb-6 font-light animate-fade-in">
            "혼자가 아닙니다"
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            당신의 고통을<br />
            우리가 함께합니다
          </h1>
          <p className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed">
            학교폭력으로 힘든 시간을 보내고 계신가요?<br />
            더 이상 혼자 견디지 마세요.<br />
            <br />
            <strong className="text-white">당신은 잘못하지 않았습니다.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              href="/hope"
              className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-2xl"
            >
              희망의 이야기 보기
            </Link>
            <Link
              href="/report"
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              지금 도움받기
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <p className="text-sm mb-2">↓ 아래로 스크롤해주세요</p>
        </div>
      </section>

      {/* 공감 섹션 */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-light italic border-l-4 border-red-500 pl-8 mb-8 text-red-400">
            "아무도 내 말을 믿어주지 않을 것 같아요..."
          </blockquote>
          <div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>
              복도를 지나갈 때마다 들리는 속삭임.<br />
              급식실에서 혼자 앉아야 하는 시간.<br />
              아무도 내 편이 없는 것 같은 외로움.
            </p>
            <p className="text-white font-semibold text-2xl">
              그 고통, 우리는 압니다.
            </p>
            <p>
              <strong className="text-white">당신만 겪는 일이 아닙니다.</strong><br />
              많은 학생들이 지금 이 순간에도 같은 고통을 겪고 있습니다.<br />
              하지만 이것만은 기억해주세요.
            </p>
            <p className="text-3xl font-bold text-white">
              반드시 나아질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 전환점 섹션 */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-700 to-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
            하지만 알아야 합니다
          </h2>
          <div className="text-xl md:text-2xl space-y-4 text-gray-200 mb-12">
            <p>이건 당신 잘못이 아닙니다.</p>
            <p>법이 당신을 보호합니다.</p>
            <p>도움을 요청할 수 있습니다.</p>
            <p className="text-3xl font-bold text-red-500 mt-8">
              당신은 이길 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실제 데이터 섹션 */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            많은 학생들이 이미 극복했습니다
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-black text-red-500 mb-4">87%</div>
              <div className="text-xl font-bold mb-3">성공적인 해결</div>
              <p className="text-gray-300">
                신고한 학생 중 대부분이<br />
                문제를 해결했습니다
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-black text-blue-500 mb-4">24시간</div>
              <div className="text-xl font-bold mb-3">언제든 도움</div>
              <p className="text-gray-300">
                밤낮없이 당신을<br />
                도와줄 준비가 되어있습니다
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center hover:scale-105 transition-all shadow-xl">
              <div className="text-5xl font-black text-green-500 mb-4">100%</div>
              <div className="text-xl font-bold mb-3">익명 보장</div>
              <p className="text-gray-300">
                당신의 신원은<br />
                완벽하게 보호됩니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 행동 촉구 섹션 */}
      <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            하루하루가 고통스럽다는 것, 압니다.<br />
            <strong>하지만 더 이상 참지 마세요.</strong><br />
            <br />
            첫 걸음을 내딛는 것만으로도<br />
            당신은 이미 용감한 사람입니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/report"
              className="bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              📝 지금 신고하기
            </Link>
            <Link
              href="/info"
              className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all hover:scale-105 shadow-2xl"
            >
              📚 정보 먼저 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 긴급 연락처 섹션 */}
      <section className="bg-yellow-50 py-16 px-4 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900">
            지금 당장 위험하다면
          </h2>
          <p className="text-center text-lg mb-8 text-gray-700">
            긴급한 상황에서는 주저하지 말고 바로 연락하세요
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all">
              <p className="text-lg font-semibold mb-3 text-gray-700">학교폭력신고센터</p>
              <a href="tel:117" className="text-5xl font-black text-blue-600 hover:text-blue-700">117</a>
              <p className="mt-3 text-gray-600">24시간 상담 가능</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all">
              <p className="text-lg font-semibold mb-3 text-gray-700">경찰 긴급신고</p>
              <a href="tel:112" className="text-5xl font-black text-blue-600 hover:text-blue-700">112</a>
              <p className="mt-3 text-gray-600">즉시 도움</p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 text-sm">
            모든 통화는 비밀이 보장되며, 전문 상담사가 도와드립니다
          </p>
        </div>
      </section>
    </>
  )
}
