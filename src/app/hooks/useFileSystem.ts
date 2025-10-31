'use client'
import { useState, useCallback } from 'react';
import { deleteFile, FileItem, getFiles, saveFileToBackend, uploadFile } from '../lib/fileSystem';


export function useFileSystem() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadFiles = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedFiles = await getFiles();
      setFiles(fetchedFiles);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load files');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpload = useCallback(async (file: File) => {
    try {
      setLoading(true);
      const fileItem = await uploadFile(file);
      await saveFileToBackend(fileItem);
      await loadFiles();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file');
    } finally {
      setLoading(false);
    }
  }, [loadFiles]);

  const handleDelete = useCallback(async (id: string) => {
    try {
      setLoading(true);
      await deleteFile(id);
      await loadFiles();
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete file');
    } finally {
      setLoading(false);
    }
  }, [loadFiles]);

  return {
    files,
    loading,
    error,
    uploadFile: handleUpload,
    deleteFile: handleDelete,
    loadFiles,
  };
}