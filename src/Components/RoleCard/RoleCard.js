import React from "react";
import styled from 'styled-components';

const StyledRoleCard = styled.div`
width: 160px;
height: 160px;
border: 1px solid #E8E8E8;
margin: 0 0 14px 0;
position: relative;
`

const StyledRoleFooter = styled.div`
width: 100%;
height: 24px;
background-color: #F8F8F8;
position: absolute;
bottom: 0;
`

const RoleCardContent = styled.div`
height: 136px;
`

const RoleCardTitle = styled.h2`
color: #666666;
font-size: 10px;
font-weight: 400;
margin: 32px 0 0 15px;
`

const RoleCardSubtitle = styled.h3`
font-size: 6px;
margin: 2px 0 0 15px;
font-weight: 200;
color: #9a9a9a;
`

const RoleCardDescription = styled.p`
font-size: 5px;
font-weight: 200;
color: #9a9a9a;
margin: 15px 20px 0 15px;
`

const RoleUsersWrapper = styled.div`
margin: 10px 20px 0 15px;
`

const RoleUser = styled.img`
height: 15px;
width: 15px;
border-radius: 50%;
border: 0;
margin: 0 2px 2px 0;
float: left;
display: block;
`
const RoleUserOverflow = styled.div`
height: 15px;
width: 15px;
border-radius: 50%;
border: 0;
margin: 0 2px 2px 0;
float: left;
display: block;
background-color:  #9B9B9B;
color: white;
font-size: 7px;
line-height: 15px;
text-align: center;
`

const InactiveIndicator = styled.div`
position: absolute;
top: 9px;
right: 9px;
width: 25px;
height: 10px;
background-color: #FA3C30;
color: white;
text-transform: uppercse;
font-size: 4px;
text-align: center;
border-radius: 3px;
line-height: 10px;
`

const DateCreated = styled.div`
color: #A9A8A9;
line-height: 24px;
font-size: 6px;
margin-left: 15px;
`

function RoleCard(props) {
    const numUsers = props.numUsers;
    const editPrivileges = props.edit;
    const active = props.active;
    return (
        <StyledRoleCard>
            <RoleCardContent>
                {active < 1 && 
                   <InactiveIndicator>INACTIVE</InactiveIndicator>
                }
                
                <RoleCardTitle>{props.roleTitle}</RoleCardTitle>
                <RoleCardSubtitle>{props.roleType}</RoleCardSubtitle>
                <RoleCardDescription>{props.roleDescription}</RoleCardDescription>
                <RoleUsersWrapper>
                    {numUsers > 0 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 1 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 2 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 3 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 4 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 5 &&
                        <RoleUser src={"https://via.placeholder.com/30"} />
                    } {numUsers > 6 &&
                        <RoleUserOverflow>&#43;{numUsers-6}</RoleUserOverflow>
                    }
                </RoleUsersWrapper>

            </RoleCardContent>
            <StyledRoleFooter>
                <DateCreated>Date created: {props.dateModified}
                </DateCreated>
            </StyledRoleFooter>
        </StyledRoleCard>
    );
}

export default RoleCard;