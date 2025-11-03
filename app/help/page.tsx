import Link from 'next/link'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            도움받는 방법
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            <strong>당신은 혼자가 아닙니다.</strong><br />
            지금 바로 도움을 받을 수 있습니다.
          </p>
        </div>
      </section>

      {/* 긴급 상황 */}
      <section className="bg-red-50 border-4 border-red-400 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-red-700">
            ⚠️ 지금 당장 위험한 상황인가요?
          </h2>
          <p className="text-center text-lg mb-8 text-gray-700">
            폭력이 진행 중이거나 생명에 위협을 느낀다면<br />
            이 페이지를 읽지 말고 즉시 연락하세요
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:117" className="bg-white p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all group">
              <p className="text-lg font-semibold mb-3 text-gray-700">학교폭력신고센터</p>
              <p className="text-6xl font-black text-blue-600 group-hover:text-blue-700 mb-3">117</p>
              <p className="text-gray-600">24시간 상담 및 신고</p>
            </a>
            <a href="tel:112" className="bg-white p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all group">
              <p className="text-lg font-semibold mb-3 text-gray-700">경찰 긴급신고</p>
              <p className="text-6xl font-black text-blue-600 group-hover:text-blue-700 mb-3">112</p>
              <p className="text-gray-600">즉각적인 도움</p>
            </a>
          </div>
        </div>
      </section>

      {/* 단계별 가이드 */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            단계별 도움받기
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">
            상황에 맞는 방법을 선택하세요. 모든 방법이 안전하며 비밀이 보장됩니다.
          </p>

          <div className="space-y-8">
            {/* 1단계 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-red-500">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white text-red-600 rounded-full flex items-center justify-center text-3xl font-black">
                    1
                  </div>
                  <h3 className="text-3xl font-bold">즉시 안전 확보</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6 text-lg">
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-900">✓ 위험한 상황에서 벗어나세요</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>가해자가 있는 장소를 피하세요</li>
                      <li>선생님이 계신 곳, 사람들이 많은 곳으로 이동하세요</li>
                      <li>혼자 있지 마세요</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-900">✓ 즉시 연락하세요</h4>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p className="font-semibold text-red-800">117 (학교폭력신고센터) 또는 112 (경찰)</p>
                      <p className="text-sm text-gray-700 mt-2">24시간 언제든지 전화할 수 있습니다</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2단계 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-blue-500">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-black">
                    2
                  </div>
                  <h3 className="text-3xl font-bold">증거 확보하기</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6 text-lg">
                  <p className="text-gray-700 font-semibold">
                    증거가 있으면 더 확실하게 문제를 해결할 수 있습니다
                  </p>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-900">✓ 수집해야 할 증거</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>문자 메시지, 카카오톡</strong> - 스크린샷으로 저장</li>
                      <li><strong>SNS 게시물, 댓글</strong> - 날짜가 보이게 캡처</li>
                      <li><strong>사진이나 영상</strong> - 폭력 장면, 상처, 손상된 물건</li>
                      <li><strong>일기나 메모</strong> - 언제, 어디서, 누가, 무엇을 했는지 기록</li>
                      <li><strong>병원 진단서</strong> - 다친 경우 반드시 병원 방문</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-800">💡 팁:</strong> 날짜와 시간이 명확하게 기록된 증거가 중요합니다.
                      삭제하지 말고 여러 곳에 백업하세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3단계 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-green-500">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-3xl font-black">
                    3
                  </div>
                  <h3 className="text-3xl font-bold">신뢰할 수 있는 어른에게 알리기</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6 text-lg">
                  <p className="text-gray-700 font-semibold">
                    혼자 해결하려 하지 마세요. 어른의 도움이 필요합니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-900">👨‍👩‍👧 부모님/보호자</h4>
                      <p className="text-sm text-gray-700">가장 먼저 말씀드려야 할 분들입니다</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-900">👨‍🏫 담임선생님</h4>
                      <p className="text-sm text-gray-700">학교 내 상황 해결에 도움을 줄 수 있습니다</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-900">💼 상담선생님</h4>
                      <p className="text-sm text-gray-700">전문적인 상담과 지원을 받을 수 있습니다</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-gray-900">👮 경찰/전문기관</h4>
                      <p className="text-sm text-gray-700">법적 조치가 필요한 경우</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-700">
                      <strong className="text-yellow-800">⚠️ 주의:</strong> 만약 말씀드린 어른이 도와주지 않는다면,
                      다른 어른에게 계속 말씀하세요. 반드시 도와줄 사람이 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4단계 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-purple-500">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-3xl font-black">
                    4
                  </div>
                  <h3 className="text-3xl font-bold">공식 신고하기</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6 text-lg">
                  <p className="text-gray-700 font-semibold">
                    공식적인 신고를 통해 가해자에게 책임을 묻고 재발을 방지합니다
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-2 text-gray-900">학교폭력 신고</h4>
                      <p className="text-gray-700">학교에 공식 신고 → 학교폭력대책심의위원회 개최 → 가해자 조치</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-2 text-gray-900">경찰 신고</h4>
                      <p className="text-gray-700">형사 처벌이 필요한 경우 (폭행, 상해, 협박, 갈취 등)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold mb-2 text-gray-900">온라인 신고</h4>
                      <p className="text-gray-700">이 사이트의 <Link href="/report" className="text-purple-600 font-bold hover:underline">신고하기</Link> 페이지 이용</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5단계 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-pink-500">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-3xl font-black">
                    5
                  </div>
                  <h3 className="text-3xl font-bold">심리적 치유받기</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-6 text-lg">
                  <p className="text-gray-700 font-semibold">
                    몸의 상처뿐 아니라 마음의 상처도 치료가 필요합니다
                  </p>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-900">✓ 전문 상담 받기</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>학교 상담실 (Wee 클래스, Wee 센터)</li>
                      <li>청소년상담복지센터 (전화: 1388)</li>
                      <li>정신건강복지센터</li>
                      <li>병원 정신건강의학과</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-pink-800">💗 기억하세요:</strong> 상담받는 것은 부끄러운 일이 아닙니다.
                      오히려 용감하게 자신을 돌보는 행동입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 도움받을 수 있는 곳 */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            도움받을 수 있는 곳
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">학교폭력신고센터</h3>
              <p className="text-4xl font-black text-blue-600 mb-3">117</p>
              <p className="text-gray-700 mb-4">24시간 전화 상담 및 신고 접수<br />전문 상담사가 도와드립니다</p>
              <a href="tel:117" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                지금 전화하기
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-green-900">청소년사이버상담센터</h3>
              <p className="text-4xl font-black text-green-600 mb-3">1388</p>
              <p className="text-gray-700 mb-4">전화, 문자, 카톡, 사이버 상담<br />www.cyber1388.kr</p>
              <a href="tel:1388" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">
                상담 받기
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-purple-900">청소년폭력예방재단</h3>
              <p className="text-gray-700 mb-4">학교폭력 예방 및 피해자 지원<br />법률 자문, 심리 상담</p>
              <a href="https://www.jikim.net" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
                웹사이트 방문
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-red-900">경찰청 (긴급)</h3>
              <p className="text-4xl font-black text-red-600 mb-3">112</p>
              <p className="text-gray-700 mb-4">즉각적인 도움이 필요한 경우<br />생명·신체에 위험이 있을 때</p>
              <a href="tel:112" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
                긴급 신고
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 행동 촉구 */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            첫 걸음이 가장 어렵습니다.<br />
            하지만 그 한 걸음이 당신의 인생을 바꿀 수 있습니다.<br />
            <br />
            <strong className="text-3xl">더 이상 혼자 견디지 마세요.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/report"
              className="bg-red-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-red-700 transition-all hover:scale-105 shadow-2xl"
            >
              📝 지금 신고하기
            </Link>
            <Link
              href="/hope"
              className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              💪 희망의 이야기
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
