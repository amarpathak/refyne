import {
    Container, ActionBar, Title,
    Button, List, Status,
    NameContainer, Action,
    ModalData, ModalTitle, ContactOptions, Details,
    NoMore, Loading
} from './styles'
import Table from '../../components/Table'
import { useMemo, useState, useRef, useCallback } from 'react'
import useVisitors from './api/useVisitors';
import Avatar from '../../components/Avatar';
import Modal from '../../components/Modal'
import Eye from './eye.webp'

const VisitorsPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { visitors, loading, error, hasMore } = useVisitors(pageNumber);

    //Lets do some data preparation
    const dataFilter = (data) => {
        let processedData = [];
        data.forEach((d) => {
            const { id } = d;
            let status;
            if (id % 5 === 0) {
                status = 'removed'
            } else {
                status = id % 2 === 0 ? 'active' : 'inactive';
            }
            processedData.push({
                ...d,
                status
            })
        })
        return processedData
    }
    //preprocessing the data
    const data = useMemo(() => dataFilter(visitors))

    //Infinnite Loading
    const observer = useRef()

    const lastItemRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const [show, setShow] = useState(false)
    const [modalData, setModalData] = useState(null)

    const openModal = (data) => {
        setModalData(data)
        setShow(true)
    }
    const renderNameBox = (row) => <NameContainer>
        <Avatar url={row.avatar} />
        <div className='info'>

            <div className='name'>
                {row.first_name} {row.last_name}
            </div>
            <div className='username'>
                @{row.first_name}
            </div>
        </div>
    </NameContainer>

    const renderStatus = (row) => <Status status={row.status}>{row.status}</Status>

    return (
        <Container>
            <ActionBar>
                <Title>
                    Visitors
                </Title>

                <Button>Add Visitor</Button>
            </ActionBar>
            <List>
                <Table lastItemRef={lastItemRef} data={data} columns={[
                    {
                        title: "Name",
                        render: (row) => <span onClick={() => openModal(row)}>
                            {renderNameBox(row)}
                        </span>
                    },
                    {
                        title: "Email",
                        key: "email",
                    },
                    {
                        title: "Status",
                        key: "status",
                        render: (row) => renderStatus(row),
                        hideInMobile: true,
                    },
                    {
                        title: "Action",
                        render: (row) => <Action onClick={() => openModal(row)}><img src={Eye} /></Action>,
                        hideInMobile: true,

                    }
                ]} />
                {!hasMore && !loading && <NoMore>No More Item !</NoMore>}
                {hasMore && loading && <Loading>Loading !!!</Loading>}
            </List>

            <Modal toggleModal={() => setShow(prev => !prev)} open={show}>
                <ModalData>
                    <ModalTitle>Contact Details</ModalTitle>
                    <Details>
                        <div className='avatar-status'>
                            <div>
                                {modalData && renderNameBox(modalData)}

                            </div>
                            <div >
                                {modalData && renderStatus(modalData)}
                            </div>

                        </div>
                        <div className='text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </Details>
                    <ContactOptions>
                        <div className='title'>
                            More Contact Details
                        </div>
                        <div className='contact-options'>
                            <button className=' button call'>Call</button>
                            <button className=' button email'>Email</button>
                        </div>
                    </ContactOptions>
                </ModalData>
            </Modal>
        </Container >
    )
}

export default VisitorsPage