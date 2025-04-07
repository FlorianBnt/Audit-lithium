import Head from 'next/head'
import AuditFormLithium from '../components/AuditFormLithium'

export default function Home() {
  return (
    <>
      <Head>
        <title>Audit DEEE - Risque Lithium</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-4">
        <AuditFormLithium />
      </main>
    </>
  )
}
