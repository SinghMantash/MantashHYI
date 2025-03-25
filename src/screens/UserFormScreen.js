import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../store/userSlice';
import { Button, TextInput, View } from 'react-native';

const UserFormScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = route?.params?.user;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = () => {
    if (user) {
      dispatch(updateUser({ id: user.id, name, email }));
    } else {
      dispatch(createUser({ name, email }));
    }
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title={user ? 'Update' : 'Create'} onPress={handleSubmit} />
    </View>
  );
};

export default UserFormScreen;