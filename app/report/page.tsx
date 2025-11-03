'use client'

import { useState } from 'react'

export default function ReportPage() {
  const [formData, setFormData] = useState({
    reporterType: 'anonymous',
    reporterName: '',
    reporterContact: '',
    incidentDate: '',
    incidentLocation: '',
    incidentType: '',
    description: '',
    witnesses: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 구현에서는 여기서 API로 데이터를 전송합니다
    console.log('신고 내용:', formData)
    setSubmitted(true)

    // 3초 후 폼 초기화
    setTimeout(() => {
      setFormData({
        reporterType: 'anonymous',
        reporterName: '',
        reporterContact: '',
        incidentDate: '',
        incidentLocation: '',
        incidentType: '',
        description: '',
        witnesses: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-400 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">신고가 접수되었습니다</h2>
          <p className="text-gray-700 mb-4">
            귀하의 용기있는 신고에 감사드립니다. 신고 내용은 안전하게 처리됩니다.
          </p>
          <p className="text-sm text-gray-600">
            긴급한 상황이라면 117 또는 112로 즉시 연락해주세요.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center text-red-600">
        학교폭력 신고하기
      </h1>
      <p className="text-center text-gray-600 mb-8">
        익명 신고도 가능합니다. 모든 신고는 안전하게 보호됩니다.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2 text-yellow-800">긴급 상황인가요?</h3>
          <p className="text-gray-700 mb-3">
            지금 당장 위험한 상황이라면 이 폼을 작성하지 말고 즉시 다음 번호로 연락하세요:
          </p>
          <div className="flex gap-4 justify-center">
            <div className="bg-white p-3 rounded shadow">
              <p className="font-semibold">학교폭력신고센터</p>
              <p className="text-2xl font-bold text-blue-600">117</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="font-semibold">경찰 신고</p>
              <p className="text-2xl font-bold text-blue-600">112</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block font-semibold mb-2">신고자 유형 *</label>
            <select
              name="reporterType"
              value={formData.reporterType}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="anonymous">익명</option>
              <option value="victim">피해자</option>
              <option value="witness">목격자</option>
              <option value="parent">학부모</option>
              <option value="teacher">교사</option>
            </select>
          </div>

          {formData.reporterType !== 'anonymous' && (
            <>
              <div>
                <label className="block font-semibold mb-2">이름</label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">연락처</label>
                <input
                  type="tel"
                  name="reporterContact"
                  value={formData.reporterContact}
                  onChange={handleChange}
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="010-0000-0000"
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-semibold mb-2">사건 발생 날짜 *</label>
            <input
              type="date"
              name="incidentDate"
              value={formData.incidentDate}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">사건 발생 장소 *</label>
            <input
              type="text"
              name="incidentLocation"
              value={formData.incidentLocation}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="예: OO중학교 3층 화장실"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">폭력 유형 *</label>
            <select
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">선택하세요</option>
              <option value="physical">신체폭력</option>
              <option value="verbal">언어폭력</option>
              <option value="cyber">사이버폭력</option>
              <option value="theft">금품갈취</option>
              <option value="bullying">따돌림</option>
              <option value="sexual">성폭력</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">상세 내용 *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="사건의 경위, 가해자 정보, 피해 상황 등을 최대한 자세히 작성해주세요"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">목격자 정보</label>
            <textarea
              name="witnesses"
              value={formData.witnesses}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="목격자가 있다면 이름이나 특징을 작성해주세요 (선택사항)"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600">
            <p className="text-sm text-gray-700">
              <strong>개인정보 보호:</strong> 제공하신 모든 정보는 학교폭력 예방 및 처리 목적으로만 사용되며,
              관련 법령에 따라 안전하게 보호됩니다.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
          >
            신고 제출하기
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>이 신고 시스템은 데모용입니다. 실제 신고는 117 또는 학교에 직접 문의하세요.</p>
        </div>
      </div>
    </div>
  )
}
