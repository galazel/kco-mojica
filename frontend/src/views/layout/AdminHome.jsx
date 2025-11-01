import HeaderAdmin from '@/components/HeaderAdmin';
import React from 'react'

export default function AdminHome({children}) {
   return (
    <main className="relative flex flex-col">
      <HeaderAdmin />
      {children}
      {/* footer */}
    </main>
  );
}
