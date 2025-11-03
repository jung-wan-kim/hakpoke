import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

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
      <body className={`${inter.variable} ${notoSansKR.variable} antialiased`}>
        {/* Windsurf 스타일 네비게이션 */}
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: 'rgba(10, 22, 40, 0.8)', backdropFilter: 'blur(20px)' }}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-white font-light text-2xl tracking-tight hover:text-white/80 transition-colors">
              학폭케어
            </Link>
            <div className="flex items-center gap-1">
              <Link href="/" className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors uppercase tracking-wider">
                홈
              </Link>
              <Link href="/hope" className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors uppercase tracking-wider">
                희망
              </Link>
              <Link href="/help" className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors uppercase tracking-wider">
                도움
              </Link>
              <Link href="/info" className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-sm transition-colors uppercase tracking-wider">
                정보
              </Link>
              <Link
                href="/report"
                className="ml-4 text-sm font-semibold px-6 py-2 rounded-sm transition-all uppercase tracking-wider"
                style={{
                  background: '#09B6A2',
                  color: '#0A1628',
                  boxShadow: '0 4px 12px rgba(9, 182, 162, 0.3)'
                }}
              >
                신고
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen" style={{ paddingTop: '0' }}>
          {children}
        </main>

        {/* Windsurf 스타일 푸터는 page.tsx에 통합되어 있으므로 제거 */}
      </body>
    </html>
  )
}
