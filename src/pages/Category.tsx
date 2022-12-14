import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
import Post from '../util/Post';
import { useParams } from 'react-router-dom';
import getPostByUrl from '../util/getPostByUrl';
import { Breadcrumbs } from '@mui/material';
import getPostById from '../util/getPostById';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import theme from "../global/theme";


const StyledLink = styled(Link)`
  color : ${theme.linkHighlight};
`

const PostsContainer = styled.div`
`

export default function Category() {
    const params = useParams();
    ///if keys is empty
    let post:Post | undefined;
    if (Object.keys(params).length === 0) {
        post = getPostByUrl('categorii/');
    } else {
        post = getPostByUrl('categorii/' + params['*']);
    }
    if (post === undefined) {
        return (
            <DefaultLayout hero={<Heading main>
                Postarea nu a fost gasita
            </Heading>}>

            </DefaultLayout>
        )
    }
    //TODO: Test the breadcrumbs
    return (
        <DefaultLayout hero={<Heading main>
            {
                post.content
                ?post.content.metadata.title
                :'Articole'
            }
            
            <Breadcrumbs>
                {
                    post.ancestors.slice(1).map((ancestor) => (
                        <StyledLink to={getPostById(ancestor).url} >
                            {
                                getPostById(ancestor).content!.metadata.title
                            }
                        </StyledLink>
                    ))
                }

            </Breadcrumbs>
        </Heading>}>

            <PostsContainer>
                {
                    post.kids.map((post) => <MediumArticleCard post={post} />)
                }
            </PostsContainer>
        </DefaultLayout>
    )
}
