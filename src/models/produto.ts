import mongoose, { Schema, Document } from 'mongoose';

export interface ProdutoModel extends Document {
  descricao: string;
  perecivel: boolean;
}

const ProdutoSchema: Schema = new Schema({
  descricao: { type: String, required: true },
  perecivel: { type: Boolean, required: true },
});

export default mongoose.model<ProdutoModel>('Produto', ProdutoSchema);
