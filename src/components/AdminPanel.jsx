import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';
import ProfileForm from './ProfileForm';
import ProfileCardList from './ProfileCardList';
import { Button } from 'react-bootstrap';

function AdminPanel() {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    description: '',
    address: ''
  });

  //Code for show detalil functionality of user
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
    setShowDetails(true); // Show details when a profile is selected
  };

  const handleCloseDetails = () => {
    setSelectedProfile(null);
    setShowDetails(false); // Close details when the close button is clicked
  };
  
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading profiles data
    setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second (simulating data loading)
    }, 2000);
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'photo', 'description', 'address'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      setError(`Please fill in the following fields: ${missingFields.join(', ')}`);
      return;
    }
    // Add or edit profile based on whether formData has an id
    try {    //Error Handling
      if (formData.id) {
        const updatedProfiles = profiles.map(profile =>
          profile.id === formData.id ? { ...profile, ...formData } : profile
        );
        setProfiles(updatedProfiles);
      } else {
        const newProfile = { ...formData, id: Date.now() };
        setProfiles([...profiles, newProfile]);
      }
      setFormData({
        name: '',
        photo: '',
        description: '',
        address: ''
      });
    } catch (error) {
      setError('Failed to save profile. Please try again.'); // Set error state
    }
  };

  const handleEdit = (profile) => {
    setFormData(profile);
  };

  const handleDelete = (id) => {
    try{
      const updatedProfiles = profiles.filter(profile => profile.id !== id);
      setProfiles(updatedProfiles);
    } catch (error) {
      setError('Failed to delete profile. Please try again.'); // Set error state
    }
  };

  const handleSearch = () => {
    // Filter profiles based on search query in name or address
    const filteredProfiles = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProfiles(filteredProfiles);
  };

  const filteredProfiles = profiles.filter(profile => {
    const nameMatch = profile.name.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = !filterLocation || profile.address.toLowerCase().includes(filterLocation.toLowerCase());
    return nameMatch && locationMatch;
  });

  return (
    <div className="admin-panel">
      
      <ProfileForm
        error={error}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      
      <h2 style={{ marginTop: '20px', marginBottom: '20px'}}>Search Profiles by using Name and Location</h2>
      {/* Search and filter inputs */}
      <div className="search-container" style={{ marginTop: '20px', marginBottom: '20px'}}>
        <input type="text" placeholder="Search by name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h2>Edit, Update or Delete Profiles</h2>
      <ProfileCardList
        profiles={profiles}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSelectProfile={handleSelectProfile}
      />

      {/* Profile details */}
      {showDetails && selectedProfile && (
        <div>
          <Button variant='primary' onClick={handleCloseDetails} style={{ marginRight: '5px'}}>Close Details</Button>
          <ProfileDetails profile={selectedProfile} />
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
