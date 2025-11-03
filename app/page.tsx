import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">
          학교폭력 없는 안전한 학교
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          학폭케어는 학교폭력을 예방하고 피해자를 보호하기 위한 정보와 지원을 제공합니다
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/info"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            정보 알아보기
          </Link>
          <Link
            href="/report"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            신고하기
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">예방</h3>
          <p className="text-gray-700">
            학교폭력을 미리 예방하기 위한 교육 자료와 가이드를 제공합니다
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-green-600">지원</h3>
          <p className="text-gray-700">
            피해 학생과 가족을 위한 상담 및 법적 지원 정보를 안내합니다
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-red-600">신고</h3>
          <p className="text-gray-700">
            익명으로 안전하게 학교폭력을 신고할 수 있는 시스템을 제공합니다
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-400">
        <h2 className="text-3xl font-bold mb-4 text-center">긴급 연락처</h2>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-lg font-semibold mb-2">학교폭력신고센터</p>
            <p className="text-3xl font-bold text-blue-600">117</p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">경찰 신고</p>
            <p className="text-3xl font-bold text-blue-600">112</p>
          </div>
        </div>
      </section>
    </div>
  )
}
