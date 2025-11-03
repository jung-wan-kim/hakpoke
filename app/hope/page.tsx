import Link from 'next/link'

export default function HopePage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 - 어둠에서 시작 */}
      <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent animate-pulse"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-red-400 text-3xl md:text-4xl mb-8 font-light italic">
            "저도 당했습니다"
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            그때는 끝이라고<br />생각했습니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12">
            복도 끝 화장실에 숨어서 점심시간을 보내던 그 학생.<br />
            세상에 혼자인 줄 알았던 그 시간.<br />
            <br />
            <strong className="text-white text-2xl">하지만 지금은 다릅니다.</strong>
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">
          <p className="text-sm">↓ 이야기를 들어주세요</p>
        </div>
      </section>

      {/* 과거의 고통 */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-5xl font-light italic border-l-4 border-red-500 pl-8 mb-12 text-red-400">
            "내가 뭘 잘못했지? 왜 나한테만 이러는 거지?"
          </blockquote>

          <div className="space-y-8 text-lg md:text-xl text-gray-300">
            <p className="leading-relaxed">
              중학교 2학년, 그때의 저는 <strong className="text-white">그냥 조용한 학생</strong>이었을 뿐입니다.
            </p>
            <p className="leading-relaxed">
              어느 날부터 시작된 일들. 책상에 '죽어'라고 쓰인 쪽지.<br />
              복도를 지나갈 때마다 들리는 킥킥거리는 웃음소리.<br />
              체육시간 팀을 나눌 때 아무도 저를 원하지 않던 그 눈빛.
            </p>
            <p className="text-2xl font-bold text-white">
              제일 견디기 힘들었던 건 폭력이 아니었습니다.
            </p>
            <p className="leading-relaxed">
              친구들이 하나둘씩 떠나가는 것.<br />
              급식실에서 혼자 밥을 먹어야 하는 것.<br />
              선생님들도 모르는 척하는 것.<br />
              세상에 나 혼자인 것 같았습니다.
            </p>
            <p className="leading-relaxed">
              부모님께는 말씀드릴 수 없었어요.<br />
              <strong className="text-red-400">"네가 잘하면 되지"</strong>라는 말을 들을 게 뻔했으니까요.
            </p>
            <p className="leading-relaxed">
              선생님께 말씀드렸을 땐<br />
              <strong className="text-red-400">"너도 좀 잘못한 게 있을 거 아니야?"</strong>라는 대답만 돌아왔습니다.
            </p>
            <p className="text-2xl font-bold text-white">
              그렇게 2년을 버텼습니다.<br />
              아니, 그냥 죽지 않고 살아있었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 전환점 */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-700 to-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-white">
            그런데 어느 날,<br />깨달았습니다
          </h2>
          <div className="text-2xl md:text-3xl space-y-6 text-gray-200 leading-relaxed">
            <p>이건 제 잘못이 아니라는 것을.</p>
            <p>법이 저를 보호해줄 수 있다는 것을.</p>
            <p>제가 싸울 수 있다는 것을.</p>
            <p className="text-4xl font-black text-red-500 mt-12 pt-8">
              그래서 저는 도움을 요청하기로 했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 현재 - 극복 후 */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-gray-900">
            그리고 지금, 저는
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl hover:scale-105 transition-all shadow-xl">
              <div className="text-6xl font-black text-green-400 mb-4">✓</div>
              <div className="text-2xl font-bold mb-4">새로운 학교</div>
              <p className="text-gray-300 text-lg leading-relaxed">
                전학을 갔고, 새로운 친구들을 만났습니다.<br />
                이제는 웃으며 학교에 갑니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl hover:scale-105 transition-all shadow-xl">
              <div className="text-6xl font-black text-blue-400 mb-4">✓</div>
              <div className="text-2xl font-bold mb-4">심리 상담</div>
              <p className="text-gray-300 text-lg leading-relaxed">
                전문 상담을 받으며<br />
                트라우마를 극복하고 있습니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl hover:scale-105 transition-all shadow-xl">
              <div className="text-6xl font-black text-red-400 mb-4">✓</div>
              <div className="text-2xl font-bold mb-4">가해자 처벌</div>
              <p className="text-gray-300 text-lg leading-relaxed">
                가해자들은 징계를 받았고,<br />
                정의가 실현되었습니다.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-2xl border-2 border-blue-200">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
              가장 중요한 것
            </p>
            <p className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed">
              <strong className="text-blue-600">저는 이제 행복합니다.</strong><br />
              다시 웃을 수 있게 되었습니다.<br />
              미래를 꿈꿀 수 있게 되었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 당신에게 하고 싶은 말 */}
      <section className="bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            당신에게 하고 싶은 말
          </h2>
          <div className="text-xl md:text-2xl space-y-6 leading-relaxed">
            <p>
              당신이 느끼는 그 고통, 두려움, 외로움.
            </p>
            <p className="text-3xl font-bold">
              저는 압니다.<br />
              왜냐하면 제가 겪었으니까요.
            </p>
            <p className="mt-8">
              하지만 이것도 압니다.
            </p>
            <p className="text-3xl font-bold">
              당신은 혼자가 아니라는 것.<br />
              이길 수 있다는 것.<br />
              다시 웃을 수 있다는 것.
            </p>
            <p className="text-4xl font-black mt-12 pt-8">
              제가 그 증거입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 당신도 할 수 있습니다 */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-gray-900">
            당신도 할 수 있습니다
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-red-500">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">더 이상 참지 마세요</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                저도 2년을 참았습니다. 그게 얼마나 힘든지 압니다.<br />
                하지만 참는 것은 해결이 아닙니다.<br />
                <strong className="text-red-600">지금 바로 손을 내밀어주세요.</strong>
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">법은 당신 편입니다</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                학교가, 선생님이, 심지어 부모님이 몰라주셔도 괜찮습니다.<br />
                <strong className="text-blue-600">법은 명확합니다.</strong><br />
                전문가들이 당신을 도와줄 것입니다.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-black mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">다시 웃는 날이 옵니다</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                지금은 믿기지 않겠지만, 저는 지금 행복합니다.<br />
                <strong className="text-green-600">당신도 그렇게 될 수 있습니다.</strong><br />
                반드시 나아질 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            지금 시작하세요
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300">
            그때의 제가 지금의 당신에게 말합니다.<br />
            <br />
            <strong className="text-white text-3xl">혼자 견디지 마세요.</strong><br />
            <strong className="text-white text-3xl">도움을 요청하세요.</strong><br />
            <strong className="text-white text-3xl">반드시 나아질 수 있습니다.</strong><br />
            <br />
            첫 걸음을 내딛는 것만으로도<br />
            당신은 이미 용감한 사람입니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/report"
              className="bg-red-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl"
            >
              📝 지금 신고하기
            </Link>
            <Link
              href="/help"
              className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              📞 도움 받는 방법
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-lg text-gray-400 mb-4">긴급 상황이라면</p>
            <div className="flex justify-center gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-2">학교폭력신고센터</p>
                <a href="tel:117" className="text-4xl font-black text-blue-400 hover:text-blue-300">117</a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">경찰 긴급신고</p>
                <a href="tel:112" className="text-4xl font-black text-blue-400 hover:text-blue-300">112</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
