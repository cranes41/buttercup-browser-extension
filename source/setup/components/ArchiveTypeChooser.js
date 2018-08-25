import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ARCHIVE_TYPES = [
    {
        type: "mybuttercup",
        title: "My Buttercup",
        image: require("../../../resources/providers/mybuttercup-256.png")
    },
    {
        type: "dropbox",
        title: "Dropbox",
        image: require("../../../resources/providers/dropbox-256.png")
    },
    {
        type: "owncloud",
        title: "ownCloud",
        image: require("../../../resources/providers/owncloud-256.png")
    },
    {
        type: "nextcloud",
        title: "Nextcloud",
        image: require("../../../resources/providers/nextcloud-256.png")
    },
    {
        type: "webdav",
        title: "WebDAV",
        image: require("../../../resources/providers/webdav-256.png")
    }
];

const Container = styled.div`
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;
const ArchiveItemContainer = styled.div`
    width: 96px;
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props =>
        props.selected ? (props.disabled ? "rgba(135, 188, 185, 0.2)" : "rgba(0, 183, 172, 0.2)") : "none"};

    &:hover {
        background-color: ${props => (props.disabled ? "rgba(135, 188, 185, 0.3)" : "rgba(0, 183, 172, 0.3)")};
    }
`;
const ArchiveTypeImage = styled.img`
    width: 32px;
    height: 32px;
`;
const ArchiveTypeTitle = styled.div`
    margin-top: 4px;
    text-align: center;
`;

class ArchiveTypeChooser extends Component {
    static propTypes = {
        disabled: PropTypes.bool.isRequired,
        selectedArchiveType: PropTypes.string,
        onSelectArchiveType: PropTypes.func.isRequired
    };

    static defaultProps = {
        disabled: false
    };

    handleArchiveTypeSelection(providerType) {
        if (!this.props.disabled) {
            this.props.onSelectArchiveType(providerType);
        }
    }

    render() {
        return (
            <Container>
                <For each="provider" of={ARCHIVE_TYPES}>
                    <ArchiveItemContainer
                        key={provider.type}
                        onClick={() => this.handleArchiveTypeSelection(provider.type)}
                        selected={this.props.selectedArchiveType === provider.type}
                        disabled={this.props.disabled}
                    >
                        <ArchiveTypeImage src={provider.image} />
                        <ArchiveTypeTitle>{provider.title}</ArchiveTypeTitle>
                    </ArchiveItemContainer>
                </For>
            </Container>
        );
    }
}

export default ArchiveTypeChooser;
