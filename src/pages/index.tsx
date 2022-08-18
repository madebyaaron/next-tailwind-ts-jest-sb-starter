import { Component } from "../types/types"

interface Props extends Component {}

export function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  }
}

function Page({}: Props) {
  return <div className="">New page here</div>
}

export default Page
