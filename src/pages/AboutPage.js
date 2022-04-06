import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='About'></PageHero>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit veniam quam natus eligendi velit dolore in sunt facere laborum, illum eum nulla, numquam tempora? Perspiciatis recusandae optio illum fugit laboriosam dicta asperiores enim officiis magni ea! Natus modi, optio id magnam perferendis itaque dolore iusto eaque dignissimos, molestias necessitatibus.</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
