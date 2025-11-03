import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '학폭케어 - 학교폭력 예방 및 신고 시스템',
  description: '학교폭력을 예방하고 안전한 학교 환경을 만들기 위한 정보 제공 및 신고 시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              학폭케어
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-200 transition">
                홈
              </Link>
              <Link href="/info" className="hover:text-blue-200 transition">
                정보
              </Link>
              <Link href="/report" className="hover:text-blue-200 transition">
                신고하기
              </Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-8 mt-16">
          <div className="container mx-auto text-center">
            <p className="mb-2">학폭케어 - 안전한 학교 만들기</p>
            <p className="text-sm text-gray-400">
              긴급 상황 시 117 (학교폭력신고센터) 또는 112 (경찰)로 연락하세요
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
