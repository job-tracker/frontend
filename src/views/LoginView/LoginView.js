import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions';

const LoginView = ({ userData, fetchUser }) => {
	useEffect(() => {
		fetchUser();
	}, []);
	return (
		console.log(userData),
		userData.loading ? (
			<h2>Loading...</h2>
		) : userData.error ? (
			<h2>{userData.error.massage}</h2>
		) : (
			<div>
				<h2>User List</h2>
				<div>
					{userData &&
						userData.users &&
						userData.users.map(user => <p>{user.name}</p>)}
				</div>
			</div>
		)
	);
};

const mapStateToProps = state => {
	return {
		userData: state.users,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => dispatch(fetchUser()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
