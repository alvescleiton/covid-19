import { Title } from "../components/Title"

export default function Home({ list }) {
  return (
    <>
      <Title>Home</Title>

      <ul>
        {list?.map(item => (
          <li key={item.uid}>
            {item.state} - {item.cases.toLocaleString('pt-br')}
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  let listStates = await (await fetch('https://covid19-brazil-api.vercel.app/api/report/v1')).json()

  listStates = listStates.data.map(item => ({
    uid: item.uid,
    state: item.state,
    cases: item.cases
  }))

  return {
    props: {
      list: listStates
    }
  }
}
