import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <span><i className="fas fa-bars"></i></span>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b>Chuyên Khoa</b></div>
                                <div className='subtitle'>Tìm Bác Sĩ Chuyên Khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ Sở Y Tế</b></div>
                                <div className='subtitle'>Chọn Bệnh Viện Phòng Khám</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác Sĩ</b></div>
                                <div className='subtitle'>Chọn Bác Sĩ Giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói Khám</b></div>
                                <div className='subtitle'>Khám Sức Khỏe Tổng Quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'><i className="far fa-question-circle">Hỗ Trợ</i></div>
                            <div className='flag'>VN</div>
                        </div>
                    </div>
                </div>
                <div className='header-background'>
                    <div className='content-up'>
                        <div className='tittle1'>NỀN TẢNG Y TẾ</div>
                        <div className='tittle2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                        <div className='search'><i className="fas fa-search"></i><input placeholder='Tìm chuyên khoa y tế' type='text' /></div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className='text-child'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-notes-medical"></i>
                                </div>
                                <div className='text-child'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-vial"></i>
                                </div>
                                <div className='text-child'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                <i className="fas fa-notes-medical"></i>
                                </div>
                                <div className='text-child'>Sức khỏe tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                <i className="fas fa-notes-medical"></i>
                                </div>
                                <div className='text-child'>Khám nha khoa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
