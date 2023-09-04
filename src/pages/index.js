import { useEffect, useState } from "react";
import { Title } from "../components/Title";

export default function Home() {
  const [list, setList] = useState([])

  useEffect(() => {
    (async () => {
      const listStates = await (await fetch('https://covid19-brazil-api.vercel.app/api/report/v1')).json()

      setList(listStates.data)
    })()
  }, [])

  return (
    <>
      <Title>Home</Title>

      <ul>
        {list.map(item => (
          <li key={item.uid}>
            {item.state} - {item.cases.toLocaleString('pt-br')}
          </li>
        ))}
      </ul>
    </>
  )
}
