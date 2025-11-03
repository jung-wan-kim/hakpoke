export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        학교폭력 정보
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">학교폭력이란?</h2>
          <p className="text-gray-700 mb-4">
            학교폭력이란 학교 내외에서 학생을 대상으로 발생한 상해, 폭행, 감금, 협박, 약취·유인, 명예훼손·모욕,
            공갈, 강요·강제적인 심부름 및 성폭력, 따돌림, 사이버 따돌림, 정보통신망을 이용한 음란·폭력 정보 등에
            의하여 신체·정신 또는 재산상의 피해를 수반하는 행위를 말합니다.
          </p>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
            <p className="font-semibold text-blue-800">
              출처: 학교폭력예방 및 대책에 관한 법률 제2조
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">학교폭력의 유형</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">신체폭력</h3>
              <p className="text-gray-700">때리기, 밀치기, 발로 차기 등 신체적 공격</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">언어폭력</h3>
              <p className="text-gray-700">욕설, 협박, 모욕적 언행 등</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">금품갈취</h3>
              <p className="text-gray-700">돈이나 물건을 강제로 빼앗는 행위</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">따돌림</h3>
              <p className="text-gray-700">집단적으로 소외시키거나 괴롭히는 행위</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">사이버폭력</h3>
              <p className="text-gray-700">SNS, 메신저 등을 통한 괴롭힘</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-bold mb-2">성폭력</h3>
              <p className="text-gray-700">성적 수치심을 주는 언행이나 신체 접촉</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">피해 시 대처 방법</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="font-semibold">안전한 곳으로 즉시 대피하세요</li>
            <li className="font-semibold">믿을 수 있는 어른(부모, 선생님)에게 알리세요</li>
            <li className="font-semibold">증거를 확보하세요 (문자, 사진, 영상 등)</li>
            <li className="font-semibold">117 또는 112에 신고하세요</li>
            <li className="font-semibold">전문 상담기관의 도움을 받으세요</li>
          </ol>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-red-600">도움받을 수 있는 곳</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">학교폭력신고센터</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">117</p>
              <p className="text-gray-600">24시간 상담 및 신고 접수</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">청소년사이버상담센터</h3>
              <p className="text-gray-600">www.cyber1388.kr | 1388</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">청소년폭력예방재단</h3>
              <p className="text-gray-600">www.jikim.net</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">경찰청 학교폭력신고</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">112</p>
              <p className="text-gray-600">긴급 신고</p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 p-8 rounded-lg border-2 border-orange-400">
          <h2 className="text-2xl font-bold mb-4 text-center text-orange-700">
            중요한 것을 기억하세요
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              <span>학교폭력은 절대 피해자의 잘못이 아닙니다</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              <span>혼자 참지 말고 반드시 도움을 요청하세요</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              <span>주변에서 학교폭력을 목격했다면 방관하지 말고 신고하세요</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">✓</span>
              <span>작은 폭력도 절대 가볍게 여기지 마세요</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
