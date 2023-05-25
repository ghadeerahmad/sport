import { POPULAR_LAEGUES } from "../../config/leagues"
// import { useGetLeagueFixturesMutation } from "../../redux/slice/fixtures"
import { useState, useEffect } from 'react'
import { useGetLeagueFixturesMutation } from "../../redux/slice/fixtures"
import { Container } from "react-bootstrap"
import LoadingSpinner from "../../components/LoadingSpinner"
export default function HomeFixtures() {
    const [leagues, setLeagues] = useState<any[]>([])
    const [loadingLeagues, setLoadingLeagues] = useState(true)
    // const [fetchFixtures, { isLoading: isLoading }] = useGetLeagueFixturesMutation()
    const [fetchLeague] = useGetLeagueFixturesMutation()

    const fetchPopular = async () => {
        const list: any = []
        for (const item of POPULAR_LAEGUES) {
            try {
                const result: any = await fetchLeague(item)
                list.push(result.data)
            } catch (e) {
                console.log(e)
            }
        }
        console.log(list)
        setLeagues(list)
        setLoadingLeagues(false)
    }

    useEffect(() => {
        fetchPopular()
    }, [])
    return (
        <>
            {loadingLeagues && <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><LoadingSpinner /></Container>}
            {!loadingLeagues &&
                <Container>
                    {
                        leagues.map((item: any) =>
                            <p>{item}</p>
                        )
                    }
                </Container>
            }
        </>
    )
}