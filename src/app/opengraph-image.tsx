import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Halifax Properties & Investments — Buy, Sell, or Value Your Home'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const logoPath = join(process.cwd(), 'public/main-logo.png')
  const logoBytes = await readFile(logoPath)
  const logoSrc = `data:image/png;base64,${logoBytes.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: '#F5F0E8',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'serif',
        }}
      >
        <div style={{ width: '100%', height: 8, backgroundColor: '#cc2032' }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '48px 60px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <img src={logoSrc} style={{ height: 80 }} alt="" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                Halifax Properties & Investments
              </span>
              <span style={{ fontSize: 16, color: '#6B7D5E', lineHeight: 1.3 }}>
                East Bay Real Estate
              </span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: '#1A1A1A',
                textAlign: 'center',
                lineHeight: 1.15,
              }}
            >
              Halifax Properties & Investments
            </span>
            <span
              style={{
                fontSize: 24,
                color: '#6B7D5E',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              East Bay Real Estate — Buy, Sell, or Value Your Home
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: 16, color: '#1A1A1A', fontWeight: 600 }}>
              Geoffrey Enebly · (510) 507-5088
            </span>
            <span style={{ fontSize: 14, color: '#6B7D5E' }}>
              Licensed Realtor · CalBRE# 00899654
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
