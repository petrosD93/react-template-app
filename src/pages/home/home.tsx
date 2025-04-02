import './home.scss'

export const Home = () => {
    const renderCard = (title: string, value: string, details: string, detailsMessage: string) => {
        return (
            <div className="rta-card d-flex flex-column gap-2">
                <div>{title}</div>
                <div className="card-second-row">{value}</div>
                <div>
                    <span className="card-details">{details}</span>&nbsp;{detailsMessage}
                </div>
            </div>
        )
    }

    return (
        <div className="home-wrapper">
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-3">
                    {renderCard('Orders', '152', '24 new', 'since last visit')}
                </div>

                <div className="col-12 col-lg-6 col-xl-3">{renderCard('Purchases', '52', '10', 'since last week')}</div>

                <div className="col-12 col-lg-6 col-xl-3">
                    {renderCard('Revenue', '$2.100', '%52+', 'since last week')}
                </div>

                <div className="col-12 col-lg-6 col-xl-3">
                    {renderCard('Customers', '2500', '520', 'newly registered')}
                </div>
            </div>
        </div>
    )
}
