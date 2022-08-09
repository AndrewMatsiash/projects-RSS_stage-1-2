import { garage } from './rootRequest';

export const updateCar = async (
  body: { name: FormDataEntryValue | null, color: FormDataEntryValue | null }, id: number,
): Promise<Response> => (
  fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
);
