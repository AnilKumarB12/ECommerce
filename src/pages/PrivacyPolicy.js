import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/MetaD";
import Container from '../components/Container';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Pricy Policy"} />
            <BreadCrumb title="Pricy Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy