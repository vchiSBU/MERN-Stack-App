import React, { useState } 	from 'react';

import { WModal, WMHeader, WMMain, WButton } from 'wt-frontend';
import WMFooter from 'wt-frontend/build/components/wmodal/WMFooter';

const Delete = (props) => {

    const handleDelete = async () => {
        props.deleteList(props.activeid);
        props.setShowDelete(false);
    }

    const [isVisible, setVisible] = useState(true);

    return (
        // Replace div with WModal
        <div className="delete-modal">
            <WModal visible = {isVisible}>
				<WMHeader>
                    <div className="modal-header" onClose={() => props.setShowDelete(false)}>
                        Delete List?
                    </div>
                </WMHeader>
                <WMFooter>
                    <WButton className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                        Delete
                    </WButton>
                    <label className="col-spacer">&nbsp;</label>
                    <WButton className="modal-button cancel-button" onClick={() => {setVisible(false); props.setShowDelete(false)}} wType="texted">
                        Cancel
                    </WButton>
                </WMFooter>
            </WModal>
        </div>
    );
}

export default Delete;