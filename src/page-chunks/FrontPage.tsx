import styled from 'styled-components';
type Props = {}

const Heading = styled.div`
    font-weight : bold;
    font-family : 'roboto-slab';
    font-size : 1.8rem;
    margin-bottom : 2.6rem;
    padding-top : 0.625rem;
    padding-bottom : 0.75rem;
    border-top : 1px dashed #ababab;
    border-bottom : 3px solid #262626;
    color : #969696;
`

export default function FrontPage(_props: Props) {
  return (
    <>
        <Heading>
            Articole recomandate
        </Heading>
    </>
  )
}