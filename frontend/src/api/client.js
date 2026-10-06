const API_BASE_URL = 'http://127.0.0.1:8080';

export async function fetchCareers() {
  const response = await fetch(`${API_BASE_URL}/api/careers`);
  if (!response.ok) {
    throw new Error('Failed to load career paths from server.');
  }
  return response.json();
}

export async function fetchCareerById(careerId) {
  const response = await fetch(`${API_BASE_URL}/api/careers/${careerId}`);
  if (!response.ok) {
    throw new Error(`Failed to load career details for ${careerId}.`);
  }
  return response.json();
}

export async function fetchDemoProfile() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/demo-profile`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.warn('Backend demo-profile endpoint unreachable, falling back to local demo profile.');
  }
  return null;
}

export async function checkAiStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/ai-status`);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    // offline or backend not started
  }
  return { gemini_configured: false, mode: "Offline / Fallback" };
}

export async function analyzeProfile(profileData) {
  const response = await fetch(`${API_BASE_URL}/api/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    let errorDetail = 'Analysis request failed.';
    try {
      const errJson = await response.json();
      errorDetail = errJson.detail || errorDetail;
    } catch (e) {
      // ignore
    }
    throw new Error(errorDetail);
  }

  return response.json();
}
