import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import styled from 'styled-components';
import theme from '../global/theme';
import HeroImage from '../page-chunks/HeroImage';
import flagsImage from '../img/flag2.jpg';
import ArticleIcon from '@mui/icons-material/Article';
import FrontPage from "../page-chunks/FrontPage";
import CampaignIcon from '@mui/icons-material/Campaign';
import YouTubeIcon from '@mui/icons-material/YouTube';


const MainTagline = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 5rem;
  color : #FEFEFE;
  transition : border-top 0.5;
  transition : border-bottom 0.5;
  border-top : 2px solid #FEFEFE;
  border-bottom : 2px solid #FEFEFE;
  @media only screen and (max-width: ${`${theme.md - 1}px`}) {
    font-size: 3rem;
    min-height : 50px;
  }

  @media only screen and (max-width: ${`${theme.sm - 1}px`}) {
    font-size: 2rem;
    min-height : 50px;
  }
`
const Secondary = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 3rem;
  color : #FFFFFF;
  @media only screen and (max-width: ${`${theme.md - 1}px`}) {
    font-size: 1.5rem;
    min-height : 50px;
  }
  @media only screen and (max-width: ${`${theme.sm - 1}px`}) {
    font-size: 1rem;
    min-height : 50px;
  }
`
const Center = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  height : 100%;
`

const infoBoxes = [
  {
    color: '#00B5E2',
    mainText: 'Articles',
    subText: 'Afla tips and tricks folositoare',
    renderIcon: ((props: any) => (<ArticleIcon {...props}></ArticleIcon>)),
    link: '/articole',
  },
  {
    color: '#00C8A0',
    mainText: 'Interviuri',
    subText: 'Cu persoane importante',
    renderIcon: ((props: any) => (<CampaignIcon {...props}></CampaignIcon>)),
    link: '/',
  },
  {
    color: '#FB6C6C',
    mainText: 'Youtube',
    subText: 'Pentru videoclipuri detaliate',
    renderIcon: ((props: any) => (<YouTubeIcon {...props}></YouTubeIcon>)),
    link: '/',
  },
]
export default function Home() {
  return (
    <DefaultLayout hero={

      <HeroImage image={flagsImage} infoBoxes={infoBoxes}>
        <Center>
          <MainTagline>
            Educatie civica
          </MainTagline>
          <Secondary>
            Pe intelesul tuturor
          </Secondary>
        </Center>

        {/*
        <Heading>
          Articole recomandate
        </Heading>
    */}
      </HeroImage>

    }>
      <FrontPage />
    </DefaultLayout>
  )
}
