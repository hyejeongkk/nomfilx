import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';

const Container = styled.div`
    padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => 
    loading ? null :  (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now playing">
                    {nowPlaying.map(movie => movie.title)}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming Movies">
                    {nowPlaying.map(movie => movie.title)}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular Movies">
                    {nowPlaying.map(movie => movie.title)}
                </Section>
            )}
        </Container>
    );

HomePresenter.prototype = {
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
};

export default HomePresenter;