import React, {useEffect, useState} from "react";
import {Card, CardHeader, IconButton} from "@mui/material";
import {capitalizeLabel} from "../../../core/utils/handle-lables";
import {Edit} from "@mui/icons-material";

export const CardWatchmanComponent = ({watchman}: any) => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        if (watchman !== undefined) {
            setName(capitalizeLabel(watchman.firstName) + ' ' + capitalizeLabel(watchman.lastName))
            setNickname(watchman.nickname)
        }

    }, [watchman]);

    return (
        <>
            <Card>
                <CardHeader
                    action={
                        <>
                            <IconButton aria-label="settings"
                                        // ref={anchorRef}
                                        // aria-controls={openToggle ? 'composition-menu' : undefined}
                                        // aria-expanded={openToggle ? 'true' : undefined}
                                        aria-haspopup="true"
                                        // onClick={handleToggle}
                            >
                                <Edit/>
                            </IconButton>
                        </>
                    }
                    title={nickname}
                    subheader={name}
                />
            </Card>
        </>
    )
}