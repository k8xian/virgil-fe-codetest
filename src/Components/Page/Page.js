import React from "react";
import styled from 'styled-components';
import PageTitle from '../PageTitle';
import SearchBar from '../SearchBar';
import RoleCard from '../RoleCard';

const StyledPage = styled.div`
background-color: white;
width: 90vw;
max-width: 584px;
height: calc(90vh);
text-align: center;
padding-top: 1px;
margin: 13px auto;
`
const StyledPageWrapper = styled.div`
margin: 24px 34px;
text-align: left;
display: block;
position: relative;
`

const RoleCardWrapper = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
margin-top: 40px;
`

const placeholderDescrip = "Lorem ipsum dolor sita amet, consectetur adipiscing elit. Nulla eget sapien auctor, semper ipsum sed, vehicula justo..."
// numUsers would be the .length of the related array of users
const numUsersSup = 4;
const numUsersComp = 4;
const numUsersProp = 5;
const numUsersJob = 12;
const numUsersCont = 12;
const numUsersMod = 4;

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
            <StyledPage>
                <StyledPageWrapper>
                    <PageTitle title={"User Roles Management"} />
                    <SearchBar />
                    <RoleCardWrapper>
                        <RoleCard
                            numUsers={numUsersSup}
                            roleTitle={"Super Administrator"}
                            roleType={"Administrator Role"}
                            roleDescription={placeholderDescrip} />
                        <RoleCard
                            numUsers={numUsersComp}
                            roleTitle={"Company Administrator"}
                            roleType={"Administrator Role"}
                            roleDescription={placeholderDescrip} />
                        <RoleCard
                            numUsers={numUsersProp}
                            active = {0}
                            roleTitle={"Property Administrator"}
                            roleType={"Administrator Role"}
                            roleDescription={placeholderDescrip} />
                        <RoleCard
                            numUsers={numUsersJob}
                            roleTitle={"Job Recruiter"}
                            roleType={"Job Administrator Role"}
                            roleDescription={placeholderDescrip} />
                        <RoleCard
                            numUsers={numUsersCont}
                            roleTitle={"Content Administrator"}
                            roleType={"Administrator Role"}
                            roleDescription={placeholderDescrip} />
                        <RoleCard
                            numUsers={numUsersMod}
                            roleTitle={"Property Moderator"}
                            roleType={"Administrator Role"}
                            roleDescription={placeholderDescrip} />
                    </RoleCardWrapper>
                </StyledPageWrapper>
            </StyledPage>
        );
    }

}


export default Page;