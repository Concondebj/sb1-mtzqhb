import React, { useState } from 'react';
import { MessageCircle, Send, ThumbsUp } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  liked: boolean;
}

interface CommentSectionProps {
  mediaId: string;
  mediaType: 'image' | 'video';
}

export default function CommentSection({ mediaId, mediaType }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alice Martin',
      content: 'Superbe contenu ! J\'adore les détails.',
      timestamp: '2024-03-15T10:30:00',
      likes: 5,
      liked: false,
    },
    {
      id: '2',
      author: 'Thomas Dubois',
      content: 'Très inspirant, merci du partage !',
      timestamp: '2024-03-15T11:15:00',
      likes: 3,
      liked: false,
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Utilisateur',
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (commentId: string) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
          liked: !comment.liked,
        };
      }
      return comment;
    }));
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-2 text-gray-900">
        <MessageCircle size={24} />
        <h2 className="text-xl font-semibold">Commentaires</h2>
      </div>

      <form onSubmit={handleSubmitComment} className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Send size={20} />
          <span>Envoyer</span>
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{comment.author}</h3>
                <p className="text-sm text-gray-500">{formatDate(comment.timestamp)}</p>
              </div>
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                  comment.liked
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ThumbsUp size={16} />
                <span>{comment.likes}</span>
              </button>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}