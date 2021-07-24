import React, { useState, useEffect } from 'react';
import style from './ProfileStatus.module.scss';


export const ProfileStatus = (props) => {

    const [editModeValue, EditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const EditStatusOff = () => {
        EditMode(false);
        props.getUpdateStatus(status)
    }
    const EditStatusOn = () => {
        EditMode(true);
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={style.ProfileStatus}>

            {!editModeValue &&
                <div onDoubleClick={EditStatusOn}>{props.status}</div>
            }
            {editModeValue &&
                <div onBlur={EditStatusOff}><input autoFocus={true} onChange={onChangeStatus} value={status}/></div>
            }
        </div>
    )

}
