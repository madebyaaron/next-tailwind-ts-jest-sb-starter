import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface Props {
  className?: string
  foo: string
}

export function getStaticProps() {
  return {
    props: {
      foo: "bar"
    }
  }
}

function Page({ foo }: Props) {
    return <div className="font-bold">New page here ({foo})</div>
}

export default Page
