import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAuthUser } from '../../redux';

const AuthUserView = ({ userData, fetchAuthUser }) => {
	useEffect(() => {
		fetchAuthUser();
	}, []);
	return userData.loading ? (
		<h2>Loading...</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>Users</h2>
			<div>
				{userData &&
					userData.users &&
					userData.users.map(
						user => (
							<p>
								{user.user_id}
								<br />
								{user.name}
								<br />
								{user.email}
							</p>
						),
						<p></p>,
						<p></p>
					)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		userData: state.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchAuthUser: () => dispatch(fetchAuthUser()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserView);
