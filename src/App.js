import React from 'react';
import './App.css'; 


const Badge = ({ emPromocao }) => {
  if (!emPromocao) return null;
  return <div className="badge-promocao">PROMOÇÃO</div>;
};

const Cartao = ({ children }) => {
  return <div className="cartao-container">{children}</div>;
};

const CartaoProduto = ({ nome, preco, descricao, imagem, emPromocao }) => {
  const handleAdicionar = () => {
    alert(`Produto adicionado: ${nome}`);
  };

  return (
    <Cartao>
      <Badge emPromocao={emPromocao} />
      
      <img 
        src={imagem || 'https://via.placeholder.com/300x200?text=Sem+Imagem'} 
        alt={`Imagem do produto ${nome}`} 
        className="produto-imagem" 
      />
      
      <div className="produto-info">
        <h3 className="produto-nome">{nome}</h3>
        <p className="produto-descricao">{descricao}</p>
        <span className="produto-preco">
          {preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        
        <button className="btn-adicionar" onClick={handleAdicionar}>
          Adicionar ao carrinho
        </button>
      </div>
    </Cartao>
  );
};

const Vitrine = ({ produtos }) => {
  return (
    <div className="vitrine-grid">
      {produtos.map((produto, index) => (
        <CartaoProduto
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
          emPromocao={produto.emPromocao}
        />
      ))}
    </div>
  );
};


export default function App() {
  const listaDeProdutos = [
    {
      nome: "Tênis Esportivo",
      preco: 249.90,
      descricao: "Tênis leve e confortável, ideal para corridas e treinos diários.",
      imagem: "https://via.placeholder.com/300x200/eee/333?text=Tenis",
      emPromocao: false
    },
    {
      nome: "Smartwatch",
      preco: 450.00,
      descricao: "Relógio inteligente com monitoramento cardíaco e GPS integrado.",
      imagem: "https://via.placeholder.com/300x200/eee/333?text=Smartwatch",
      emPromocao: true
    },
    {
      nome: "Mochila Impermeável",
      preco: 120.50,
      descricao: "Mochila resistente à água com compartimento para notebook.",
      imagem: "https://via.placeholder.com/300x200/eee/333?text=Mochila",
      emPromocao: true
    },
    {
      nome: "Garrafa Térmica",
      preco: 85.00,
      descricao: "Mantém a bebida gelada por até 24h e quente por 12h.",
      imagem: "",
      emPromocao: false
    }
  ];

  return (
    <div className="app-container">
      <h1 className="titulo-loja">Catálogo de Produtos</h1>
      <Vitrine produtos={listaDeProdutos} />
    </div>
  );
}