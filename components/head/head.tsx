import Head from "next/head";

type HeadsProps = {
  props: string
}

function Heads({props} : HeadsProps) :JSX.Element {
  return (
  <Head>
    <title>Create Next App</title>
    <meta name="description" content={props} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}
export default Heads;