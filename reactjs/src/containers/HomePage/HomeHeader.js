import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {
        return (
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
