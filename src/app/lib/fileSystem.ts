export interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: Date;
  data?: ArrayBuffer;
}

export async function uploadFile(file: File): Promise<FileItem> {
  const arrayBuffer = await file.arrayBuffer();
  
  return {
    id: crypto.randomUUID(),
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: new Date(file.lastModified),
    data: arrayBuffer,
  };
}

export async function saveFileToBackend(fileItem: FileItem): Promise<void> {
  const response = await fetch('/api/files', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: fileItem.id,
      name: fileItem.name,
      size: fileItem.size,
      type: fileItem.type,
      data: Array.from(new Uint8Array(fileItem.data!)),
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to save file');
  }
}

export async function getFiles(): Promise<FileItem[]> {
  const response = await fetch('/api/files');
  if (!response.ok) {
    throw new Error('Failed to fetch files');
  }
  return response.json();
}

export async function deleteFile(id: string): Promise<void> {
  const response = await fetch(`/api/files/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete file');
  }
}