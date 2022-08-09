import { engine } from './rootRequest';

export const drive = async (id: number): Promise<{ success: boolean } | { success?: undefined }> => {
  const res = await fetch(`${engine}?id=${id}&status=drive`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json) };
};
